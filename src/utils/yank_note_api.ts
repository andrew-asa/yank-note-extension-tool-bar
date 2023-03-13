import axios from "axios";

export async function fetchSettings() {
    const result = await axios.get('api/settings')
    return result.data
};
export async function fetchRepositories() {
    const { data } = await fetchSettings()
    return data.repositories
};

export async function readFile(repo, path) {
    const { data } = await axios.get('api/file', {
        params: {
            path: path,
            repo: repo
        }
    })
    return data
};
/**
 * 文件保存
 * @param repo 
 * @param path 
 * @param content 
 * @param oldHash 
 * @param asBase64 
 */
export function writeFile(repo, path, content, oldHash = "", asBase64 = false) {
    if (oldHash) {
        axios.post('api/file', {
            "repo": repo,
            "path": path,
            "content": content,
            "oldHash": oldHash,
            "asBase64": asBase64
        })
    } else {
        readFileHash(repo, path).then((hash) => {
            if (hash) {
                axios.post('api/file', {
                    "repo": repo,
                    "path": path,
                    "content": content,
                    "oldHash": hash,
                    "asBase64": asBase64
                })
            }
        })
    }
};

export async function readFileContent(repo, path) {
    const { data } = await readFile(repo, path)
    return data.content
};
export async function readFileHash(repo, path) {
    const { data } = await readFile(repo, path)
    return data.hash
};
export async function fetchTree(repo: string, sort: string = "serial-asc") {
    const { data } = await axios.get('api/tree', {
        params: {
            sort: sort,
            repo: repo
        }
    })
    return data
};
