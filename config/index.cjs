/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe5a6656ec2d3e348',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f06e2557b939099d830ab053e069cf61',

  PROVINCE: '浙江',
  CITY: '宁波',

  USERS: [
    {
      // 想要发送的人的名字
      name: '很想库',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oNiP56QjfzDGXOd7IZYG5yBC27JY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0YvKfkWcYIe5M8f_-CfIG78u7zfXIPHNWMVNyIThYuA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-03',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '胡慕颖', year: '2006', date: '07-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '冷嘉伟', year: '2003', date: '04-12',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '10-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-04' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0YvKfkWcYIe5M8f_-CfIG78u7zfXIPHNWMVNyIThYuA',

  CALLBACK_USERS: [
    {
      name: 'Smile',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oNiP56TiSPnhmK0p64hIxN_3xUYU',
    }
  ],

}

module.exports = USER_CONFIG

