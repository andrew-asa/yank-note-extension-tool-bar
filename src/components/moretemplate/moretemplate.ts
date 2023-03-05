import { testStr } from "@/utils/StringUtils";
import { ctx } from "@yank-note/runtime-api";
//@ts-ignore
import { writeFile } from "@yank-note/runtime-api/types/types/renderer/support/api";

export const template_settings_path = '/_settings/template_settings.md'
export async function readFile(repo, path) {
    return await ctx.api.readFile({
        repo: repo,
        path: path,
    })
}
export function existFile(repo, path, existFn, noFn) {
    readFile(repo, path)
        .then(v => {
            existFn && existFn(v)
        })
        .catch(v => {
            noFn && noFn(v)
        })
}
export function writeFile(repo, path, content) {
    readFile(repo, path)
        .then(value => {
            const { hash } = value
            const file = {
                path: path,
                type: 'file',
                repo: repo,
                content: content,
                asBase64: false,
                oldHash: hash,
                contentHash: hash,
                plain: true
            }
            console.log(file)
            //@ts-ignore
            ctx.api.writeFile(file, file.content)
        })
        .catch(reason => {
            // console.log(reason)
            // console.log(reason.status)
            // console.log(reason.message)
            // console.log(reason.data)
            if (reason.message && reason.message.indexOf("no such file or director") != -1) {
                //  文件不存在，重新生成
                console.log("文件不存在，重新生成")
            }
        })
}
export async function getContent(repo, path) {
    const { content } = await ctx.api.readFile({
        repo: repo,
        path: path,
    })
    return content
}
function getCurrentRepo() {
    //@ts-ignore
    return ctx.store._state.data.currentRepo.name
}
export function getTemplates(success, fail) {
    getContent(getCurrentRepo(), template_settings_path)
        .then(content => {
            var t = []
            try {
                t = JSON.parse(content)
            } catch (err) {

            }
            success(t)
        })
        .catch(reason => fail(reason))
}
export function createTemplateSettings() {

}
function templatesToText(ts) {
    return JSON.stringify(ts)
}
function doSaveTemplates(ts) {
    var content = templatesToText(ts)
    writeFile(getCurrentRepo(), template_settings_path, content)
}
export function addTemplate(t, ts) {
    console.log("添加模板")
    doSaveTemplates(ts)
}
export function deleteTemplate(t, ts) {
    console.log("删除模板")
    doSaveTemplates(ts)
}
export function updateTemplate(t, ts) {
    console.log("更新模板")
    doSaveTemplates(ts)
}
export function saveTemplates(ts) {

    doSaveTemplates(ts)
}