import { testStr } from "@/utils/StringUtils";
import { readFile, writeFile, readFileContent } from "@/utils/yank_note_api";
import { ctx } from "@yank-note/runtime-api";
//@ts-ignore

export const template_settings_path = '/_settings/template_settings.md'

export function existFile(repo, path, existFn, noFn) {
    readFile(repo, path)
        .then(v => {
            existFn && existFn(v)
        })
        .catch(v => {
            noFn && noFn(v)
        })
}

function getCurrentRepo() {
    return ctx ? ctx.storage.get('currentFile') : "blog"
}
export function getTemplates(success, fail) {
    try {
        readFileContent(getCurrentRepo(), template_settings_path)
            .then(content => {
                var t = []
                try {
                    t = JSON.parse(content)
                } catch (err) {

                }
                success(t)
            })
            .catch(reason => fail(reason))
    } catch (e) {
        console.log("获取模板出问题")
        console.log(e)
    }
}
export function createTemplateSettings() {

}
function templatesToText(ts) {
    return JSON.stringify(ts)
}
export function saveTemplatesSetting(ts) {
    var content = templatesToText(ts)
    writeFile(getCurrentRepo(), template_settings_path, content)
}
