# BikeFestival17th-Frontend

## 開發流程
### Dependencies
- `npm` or `yarn`

### Initial
```bash
git clone git@github.com:gdsc-ncku/BikeFestival17th-Frontend.git
cd BikeFestival17th-Frontend
yarn install
yarn dev
```

### Commit message 格式
- `add:` 為新增功能、元件或是頁面
- `fix:` 為修改原有的功能或是修正 bug
- `doc:` 為修改 README.md 文件

### Branch
- `main`: 主要分支，用來部署。
- `xxx`: 各自開發分支，開發完成後合併到 `main`。
> 例如：`jason` , `jimmy` , `jerry` ... ( 自己的代號 )，**請勿直接在 `main` 上開發**
-  開 branch
```bash
git checkout -b <branch-name> # 這邊 <branch-name> 就直接用自己的名字
```
> 目前有設好 Github Action，會自動部署 `main` 的內容到 `gh-pages` 分支

### 合併流程
- 在自己的 branch 開發完 push 回 origin
- 開一個 Pull Request，如果只是一些小小的改動可以自己直接 merge 到 main。如果是較大的改動要給其他成員 code review 的話就在 discord 通知一聲，沒問題的話就再 merge。

## Components

### Router 
可以先參考 `/src/data/navBar.json` 這邊的定義
> spec 沒有特別定 <br>
> 所以我這邊就先照著翻譯（？）<br>

### Navbar
從 `/src/data/navBar.json` 讀取資料 <br>
如果要新增新的 navbar item 就直接在`/src/data/navBar.json` 加就好 <br>
props :
- `theme` : `light` or `dark` (default: `light`)

`navBar.json` schema : 
> 如果 `linkList` 只有 1 個的話，就不會顯示 dropdown
```json
[
    {
        "title": "關於單車節",
        "linkList" : [
            {
                "name": "關於單車節",
                "link": "/about"
            }
        ]
    },
    {
        "title": "參加資訊",
        "linkList" : [
            {
                "name": "交通資訊",
                "link": "/information/traffic"
            },
            {
                "name": "攤位地圖",
                "link": "/information/map"
            },
            {
                "name": "行程表",
                "link": "/information/schedule"
            },
            {
                "name": "我的行程",
                "link": "/information/mySchedule"
            }
        ]
    },
    // ...
]
```


### DropDown
props : 
- `title` : dropdown 顯示的名字
- `linkList` : hover 會顯示的 `<a>` 列表
    - `name` : `<a>` 顯示的名字
    - `link` : `<a>` 的連結


## Reference

- hover on change in tailwindcss:
    - https://stackoverflow.com/questions/60917112/displaying-button-when-hovering-over-div-in-tailwindcss
    ```html
    <div class="group">
        <button class="hidden group-hover:block">Child</button>
    </div>
    ```