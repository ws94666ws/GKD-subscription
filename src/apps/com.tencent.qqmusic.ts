import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 1,
      name: '局部广告-广告卡片',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      rules: [
        {
          key: 2,
          matches: '[text="广告"] +n [desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206534', //歌单页
            'https://i.gkd.li/import/13797001', //我的页
          ],
        },
        {
          key: 3,
          matches:
            '@ImageView - ImageView - RelativeLayout >n [text="听歌入会赢绿钻"||text="摇动点击广告跳转"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206982',
            'https://i.gkd.li/import/13218134',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页-底部广告弹窗',
      fastQuery: true,
      activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
      rules: 'View[id="js_close_btn"][desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13115121',
    },
    {
      key: 3,
      name: '全屏广告-内测体验弹窗',
      desc: '点击[不再提醒]',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      fastQuery: true,
      rules: '[text="抢先体验"] -2 [text="不再提醒"]',
      snapshotUrls: 'https://i.gkd.li/import/13178485',
    },
    {
      key: 4,
      name: '全屏广告-免流弹窗',
      desc: '点击[流量够用]',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      fastQuery: true,
      rules: '[text="流量够用"]',
      snapshotUrls: 'https://i.gkd.li/import/13197868',
    },
  ],
});
