import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[id="com.zhihu.android:id/btn_skip"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12707641', // com.zhihu.android.app.ui.activity.LauncherActivity
        'https://i.gkd.li/import/12899263', // com.zhihu.android.app.ui.activity.LaunchAdActivity
        'https://i.gkd.li/import/13070251', // com.zhihu.android.app.ui.activity.MainActivity，这三个合并为ui.activity
        'https://i.gkd.li/import/12841423', // com.zhihu.android.ContentActivity
        'https://i.gkd.li/import/12883329', // com.zhihu.android.mixshortcontainer.MixShortContainerActivity
        'https://i.gkd.li/import/12981146', // com.zhihu.android.mix.activity.ContentMixProfileActivity
      ],
    },
    {
      key: 1,
      name: '全屏广告-关闭广告弹窗',
      desc: '点击 关闭广告按钮 之后出现的广告弹窗',
      activityIds: [
        'com.zhihu.android.ContentActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
      ],
      rules:
        '@FrameLayout ImageView + TextView[text*=`虚假广告`][id=`com.zhihu.android:id/tv_content`]', // 1687787655006
    },
    {
      key: 2,
      name: '全屏广告-关闭广告原因',
      desc: '点击 关闭广告按钮 之后出现的选择原因',
      activityIds: 'com.zhihu.android.ContentActivity',
      rules: [
        '[id=`com.zhihu.android:id/confirm_uninterest`]',
        '[id=`com.zhihu.android:id/revert_uninterest`] <n * + [id=`com.zhihu.android:id/reason_container`] > [id=`com.zhihu.android:id/uninterest_reason`]',
      ],
    },
    {
      key: 3,
      name: '全屏广告-关闭推荐',
      desc: '关闭回答底部其他回答',
      activityIds: 'com.zhihu.android.mix.activity.ContentMixProfileActivity',
      rules: [
        'TextView + View + TextView + TextView[text$=`评论`][text*=`赞同`] + View',
      ],
    },
    {
      key: 5,
      name: '分段广告-推荐页广告卡片',
      desc: '赚稿费广告卡片,盐选推荐广告,知乎学课堂,汽车广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '[id="com.zhihu.android:id/content"] >2 TextView[text="不感兴趣"][id="com.zhihu.android:id/title"]',
        },
        {
          key: 1,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            'TextView[text=`内容质量差`][id=`com.zhihu.android:id/tv_content`]',
        },
        {
          key: 2,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '@ImageView[id=`com.zhihu.android:id/menu`] < FrameLayout - * > TextView[text^=`广告`]',
        },
        {
          key: 3,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '@ImageView[id=null][clickable=true] -n TextView[text*=`广告`][index=0]',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-问题-回答列表-卡片广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.zhihu.android.ContentActivity',
          fastQuery: true,
          matches: '@ImageView[clickable=true] -n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849671',
        },
        {
          key: 1,
          activityIds: 'com.zhihu.android.ContentActivity',
          matches:
            'ImageView[id=null] + TextView[text!=null][id=null] + ViewGroup > ImageView[clickable=true]',
        },
        {
          key: 2,
          activityIds: 'com.zhihu.android.ContentActivity',
          fastQuery: true,
          matches: '@ImageView[clickable=true] -3 * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849442',
        },
        {
          key: 90,
          preKeys: [0],
          activityIds: 'com.zhihu.android.ContentActivity',
          fastQuery: true,
          matches: '@[clickable=true] >3 [text="内容不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13849689',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-回答底部评论顶部的任意广告推荐',
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@Image + TextView[text$=`的广告`]',
        },
        {
          key: 1,
          matches:
            'TextView[text$=`的广告`] +n TextView[text=`×`][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12864109',
        },
        {
          key: 2,
          activityIds: [
            'com.zhihu.android.mix.activity.ContentMixProfileActivity',
          ],
          matches: 'TextView[text="查看详情"] + TextView[text="×"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647617',
            'https://i.gkd.li/import/12647659', // 点击x按钮后的快照，界面无任何变化，导致反复触发这条规则
          ],
        },
        {
          key: 3,
          matches: 'TextView[text*=`赞同`][text*=`评论`] + TextView[text=`×`]',
        },
        {
          key: 4,
          matches: 'TextView[text*=`回答`][text*=`关注`] + TextView[text=`×`]',
        },
        // 存在误触，缺乏快照处置，暂时移除
        // 误触快照：https://i.gkd.li/import/13196039
        // {
        //   key: 5,
        //   matches:
        //     'TextView[text!=null] + TextView[text*=`赞同`] + View > Image',
        // },
        {
          key: 6,
          matches: 'TextView[text$=`的广告`] - Image[id=null]',
        },
        // {
        //   key: 7,
        //   matches: 'TextView[text*=`广告`] +2 Image[id=null]', // 1687338556331
        //   误触 https://i.gkd.li/import/13332447, 原规则没有快照无法debug, 先关闭
        // },
        {
          key: 8,
          matches: 'TextView[text*=`点赞`][text*=`的回答`] +2 Image[id=null]', // 1687076663768 1686969672948
        },
        {
          key: 9,
          matches:
            'TextView[text=""] + Image[text=""] + TextView[text="\u200b"] + Image[id=null][clickable=true]', // 1687234636980
        },
        {
          key: 10,
          matches:
            '@ImageView[id=null][clickable=true] -(2) ViewGroup > [text$="广告"]',
          snapshotUrls: ['https://i.gkd.li/import/12647525'],
        },
        // 预留11~99
        {
          preKeys: [10],
          key: 100,
          name: '反馈弹窗-点击“不感兴趣”',
          matches:
            '[id="com.zhihu.android:id/recycler_view"] > FrameLayout >(3) [text$="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/import/12647541'],
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-关闭首页广告',
      activityIds: 'com.zhihu.android.app.ui.activity.AdAlphaVideoActivity',
      rules: '[id=`com.zhihu.android:id/tv_ad_close`]',
    },
    {
      key: 9,
      name: '局部广告-推荐页-顶部广告',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        '[id="com.zhihu.android:id/tv_ad_tag"] + [id="com.zhihu.android:id/img_close_focus"]', // 1686911063850
      ],
    },
    {
      enable: false,
      key: 10,
      name: '全屏广告-推送通知弹窗',
      desc: '推送通知弹窗-点击x按钮',
      activityIds: 'com.zhihu.android.app.ui.dialog.d',
      rules: [
        'TextView[id="com.zhihu.android:id/guide_title"] - ImageView[id="com.zhihu.android:id/guide_image_exit"][clickable=true]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12647583'],
    },
    {
      enable: false,
      key: 11,
      name: '全屏广告-会员页面-月卡红包',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/floating_img"] + ImageView[id="com.zhihu.android:id/floating_close_btn"][clickable=true]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12647421'],
    },
    {
      key: 12,
      name: '全屏广告-会员页面-广告弹窗',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        '[id="com.zhihu.android:id/image"] < RelativeLayout + [id="com.zhihu.android:id/dismiss"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12707676'],
    },
    {
      enable: false,
      key: 101, // 不属于广告，序号往后排
      name: '功能类-问题回答-自动展开',
      activityIds:
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[id="com.zhihu.android:id/tv_expand"][text="展开"][visibleToUser=true]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12647688',
        'https://i.gkd.li/import/12707687', // 使用 [visibleToUser=true] 进行限定，防止在控件不可见时提前触发规则
      ],
    },
  ],
});
