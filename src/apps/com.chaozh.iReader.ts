import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReader',
  name: 'VIVO 电子书',
  groups: [
    {
      key: 1,
      name: '权限提示',
      fastQuery: true,
      matchTime: 10000,
      rules: [
        {
          matches: 'Button[text="前往开启"] - Button[text="取消"]',
          snapshotUrls: 'https://i.gkd.li/import/13627649',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
      excludeActivityIds:
        'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
      rules: [
        {
          matches:
            '@ImageView[clickable=true] +(1,2) TextView[text="开启推送通知"]',
          snapshotUrls: 'https://i.gkd.li/import/13837961',
        },
      ],
    },
  ],
});
