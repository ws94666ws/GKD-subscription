import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.honor.qinxuan',
  name: '荣耀亲选',
  groups: [
    {
      key: 1,
      fastQuery: true,
      name: '全屏广告-首页广告弹窗',
      desc: '点击X',
      rules: [
        {
          matches: '[id="cn.honor.qinxuan:id/iv_close_dlg"]',
          snapshotUrls: 'https://i.gkd.li/import/13930613',
        },
      ],
    },
  ],
});
