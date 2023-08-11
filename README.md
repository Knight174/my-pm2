# my-pm2-kit

**PM2 核心价值：**

- 进程守护（自动重启，防崩溃）
- 多进程（充分利用 CPU 与内存，分摊压力）
- 日志记录

## usage

```bash
pnpm i pm2 -g
pnpm i
pnpm dev
pnpm prod
```

## command

> `console.log()` 和 `console.error()` 会被记录到日志文件中。

> pm2.config.json 为 PM2 配置文件。

```bash
pm2 list
pm2 start ...
pm2 restart <name_or_id>
pm2 stop <name_or_id>
pm2 delete <name_or_id>
pm2 info <name_or_id>
pm2 log <name_or_id>
pm2 monit <name_or_id>

pm2 start pm2.config.json
```
