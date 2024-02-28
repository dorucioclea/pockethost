import { Command } from 'commander'
import { download } from './download'

type Options = {
  debug: boolean
}

export const DownloadCommand = () => {
  const cmd = new Command(`DownloadCommand`)
    .description(`Download PocketBase versions`)
    .action(async () => {
      await download()
    })
  return cmd
}
