import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[id="com.chinamobile.mcloud:id/bn_cancel"] + [id="com.chinamobile.mcloud:id/upgrade_title"]',
      snapshotUrls: 'https://i.gkd.li/import/12774833',
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
          fastQuery: true,
          matches:
            '[id="com.chinamobile.mcloud:id/rl_container"] + [id="com.chinamobile.mcloud:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13627826',
        },
        {
          key: 1,
          activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
          matches: '[text="马上领取"] +n View > Image[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13627832',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
          fastQuery: true,
          matches:
            '[id="com.chinamobile.mcloud:id/iv_logo"] + [id="com.chinamobile.mcloud:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13627834',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-请求开启自动备份弹窗',
      activityIds: 'com.chinamobile.mcloud.client.ui.MenuActivity',
      fastQuery: true,
      rules:
        '[text="开启自动备份"] +n [id="com.chinamobile.mcloud:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13627830',
    },
  ],
});
