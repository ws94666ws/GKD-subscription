import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.netease.mail',
  name: '网易邮箱大师',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@TextView[text*="跳过"] -n FrameLayout[id="com.netease.mail:id/ad_placeholder"]',
            '@TextView[text*="跳过"] <<n FrameLayout[id="com.netease.mail:id/ad_placeholder"]',
            'View <(2,3) FrameLayout <(1,3) FrameLayout < [vid="ad_placeholder"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12818335', // 跳过 -n
            'https://i.gkd.li/import/12893573', // 跳过 <<n
            'https://i.gkd.li/import/12923776', // 跳过 <<n
            'https://i.gkd.li/import/13195662', // 跳过 <<n
            'https://i.gkd.li/import/14046124', // View
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/import/13206298', // 使用 excludeMatches 防止提前触发规则
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      activityIds: [
        'com.netease.mobimail.module.flutter.CustomFlutterActivity',
      ],
      rules:
        '[id="com.netease.mail:id/tv_ignore_this_version"][text="暂不更新"]',
      snapshotUrls: 'https://i.gkd.li/import/12664070',
    },
    {
      key: 2,
      name: '全屏广告-邮件列表广告',
      activityIds: 'com.netease.mail.biz.main.MainITabActivity',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.netease.mail:id/ad_vip"]',
          snapshotUrls: 'https://i.gkd.li/import/12999833',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[id="com.netease.mail:id/ll_delete"]',
          snapshotUrls: 'https://i.gkd.li/import/12999841',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/12664070',
    },
    {
      key: 5,
      name: '全屏广告-查看成就',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'TextView[text="恭喜您获得以下成就"] - TextView[text=""][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13876817',
    },
  ],
});
