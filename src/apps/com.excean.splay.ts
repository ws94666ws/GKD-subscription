import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.excean.splay',
  name: 'OurPlay加速器',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="发现新版本"] +n * > [text="忽略"]',
      snapshotUrls: 'https://i.gkd.li/import/12684551',
    },
  ],
});
