import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.longshine.nanwang.electric.charge',
  name: '顺易充',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页广告弹窗',
      activityIds: ['com.android.app.station.NewMainAct'],
      rules:
        '[id="com.longshine.nanwang.electric.charge:id/bodyFL"] + [id="com.longshine.nanwang.electric.charge:id/ivClose"]',
      snapshotUrls: ['https://i.gkd.li/import/12700011'],
    },
  ],
});
