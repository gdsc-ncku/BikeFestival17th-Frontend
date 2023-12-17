# BikeFestival17th-Frontend

## 開發流程
### branch
- `main`: 主要分支，用來部署
- `xxx`: 各自開發分支，開發完成後合併到 `main`
> 例如：`jason` , `jimmy` , `jerry` ... ( 自己的代號 )<br>
> **請勿直接在 `main` 上開發**

### dependencies
- `npm` or `yarn`

### Initial
```bash
git clone git@github.com:gdsc-ncku/BikeFestival17th-Frontend.git
cd BikeFestival17th-Frontend
yarn install
yarn dev
```
### 開 branch
```bash
git checkout -b <branch-name> # 這邊 <branch-name> 就直接用自己的名字
```

## 合併流程
看習慣使用 :
- pull request
- 在 local merge 完 push 回 origin

> 看自己習慣使用哪種方式 <br>
> 目前有設好 Github Action ~ <br>
> 會自動部署 `main` 的內容到 `gh-pages` 分支
