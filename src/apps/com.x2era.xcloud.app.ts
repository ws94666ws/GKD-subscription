import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.x2era.xcloud.app',
  name: 'Fa米家',
  groups: [
    {
      key: 1,
      name: '更新提示-Fa米家-升级提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      desc: '关闭升级弹窗',
      rules: [
        {
          activityIds: 'com.x2era.xcloud.app.MainActivity',
          matches: '[id$="com.x2era.xcloud.app:id/iv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13420706',
        },
      ],
    },
  ],
});
