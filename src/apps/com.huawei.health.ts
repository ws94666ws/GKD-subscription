import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.health',
  name: '华为运动健康',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '[id$="hiad_skip_text"]',
          action: 'clickCenter',
          snapshotUrls: [
            'https://i.gkd.li/import/12667766',
            'https://i.gkd.li/import/13215012',
            'https://i.gkd.li/import/13228290',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-“我的”页会员广告',
      activityIds: ['com.huawei.health.MainActivity'],
      rules: [
        {
          matches: '[id="com.huawei.health:id/item_banner_ad_close_icon"]',
          snapshotUrls: ['https://i.gkd.li/import/12667814'],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.huawei.watchface.api.WebViewActivity',
          matches:
            'View[childCount=2] > View + View[childCount=1] > Image[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13546292',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-请求开启个性化推荐弹窗',
      activityIds: 'com.huawei.watchface.api.WebViewActivity',
      rules: '[text="开启个性化推荐"] +2 [text="开启"] + Button',
      snapshotUrls: 'https://i.gkd.li/import/13546292',
    },
    {
      enable: false,
      key: 4,
      name: '局部广告-底部横幅广告',
      rules: [
        {
          activityIds: 'com.huawei.health.MainActivity',
          matches: '[id="com.huawei.health:id/marketing_close_icon"]',
          snapshotUrls: 'https://i.gkd.li/import/13587206',
        },
      ],
    },
  ],
});
