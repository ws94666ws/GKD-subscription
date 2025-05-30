import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taptap',
  name: 'TapTap',
  groups: [
    {
      key: 2,
      name: '局部广告-游戏浏览界面-推荐广告',
      desc: '自动点击【对此内容不感兴趣】',
      rules: [
        {
          key: 0,
          activityIds: 'com.taptap.other.basic.impl.TapMainActivity',

          matches:
            '[id="com.taptap.app.middle:id/decision_layout_mask"] + @[id="com.taptap.app.game:id/app_menu"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12840903',
            'https://i.gkd.li/import/12842279',
            'https://i.gkd.li/import/12864810', //需避免点击正常情况下的app menu
          ],
        },
        {
          key: 1,
          activityIds: [
            'com.taptap.game.discovery.impl.findgame.allgame.dialog.FindGameMenuDialog',
            'com.taptap.other.basic.impl.TapMainActivity',
          ],
          matches: '@LinearLayout > [text="对此内容不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12840904',
            'https://i.gkd.li/import/13258679', //other.basic.impl.TapMainActivity
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-版本更新',
      fastQuery: true,
      activityIds: 'com.taptap.upgrade.library.dialog.UpgradeDialogAct',
      rules: [
        {
          matches:
            '@[id="com.taptap.app.game:id/btn_dismiss"] <3 LinearLayout [text="发现新版本"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13387479',
            'https://i.gkd.li/import/13488702',
          ],
        },
      ],
    },
  ],
});
