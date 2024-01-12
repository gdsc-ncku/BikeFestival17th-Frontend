# BikeFestival17th-Frontend

## 開發流程
### dependencies
- `npm` or `yarn`

### Initial
```bash
git clone git@github.com:gdsc-ncku/BikeFestival17th-Frontend.git
cd BikeFestival17th-Frontend
yarn install
yarn dev
```

### branch
- `main`: 主要分支，用來部署
- `xxx`: 各自開發分支，開發完成後合併到 `main`
> 例如：`jason` , `jimmy` , `jerry` ... ( 自己的代號 )，**請勿直接在 `main` 上開發**
-  開 branch
```bash
git checkout -b <branch-name> # 這邊 <branch-name> 就直接用自己的名字
```
> 目前有設好 Github Action，會自動部署 `main` 的內容到 `gh-pages` 分支

## 合併流程
- 在自己的 branch 開發完 push 回 origin
- 開一個 Pull Request，如果只是一些小小的改動可以自己直接 merge 到 main。如果是較大的改動要給其他成員 code review 的話就在 discord 通知一聲，沒問題的話就再 merge。


