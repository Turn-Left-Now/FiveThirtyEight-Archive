# Commit History for ap-election-loader

Original repository: [https://github.com/fivethirtyeight/ap-election-loader](https://github.com/fivethirtyeight/ap-election-loader)

This file contains the commit history of the original repository as of the time of archiving.

| Date | Author | Message | Commit URL |
|------|--------|---------|------------|
| 2013-10-31 10:52:33 | Jay Boice | Always clean and initialize when recording | [e09bdee](https://github.com/fivethirtyeight/ap-election-loader/commit/e09bdee886f5b5308954e3abb6615712de1a0724) |
| 2013-10-28 10:44:49 | Jay Boice | Force directory deletion when using --clean option | [dce0ec3](https://github.com/fivethirtyeight/ap-election-loader/commit/dce0ec3a731fa984539df31511e075c3f9645c6f) |
| 2013-10-23 09:36:24 | Jay Boice | Add more output for sleeping, posthooks | [a0dcc2e](https://github.com/fivethirtyeight/ap-election-loader/commit/a0dcc2e4c6fe57d6872765613fcb3b69c8cccaf1) |
| 2013-10-23 09:24:32 | Jay Boice | Add Bycoffe | [b50ff69](https://github.com/fivethirtyeight/ap-election-loader/commit/b50ff69a9bd9fa4b7f044d4912b58bc0d4ce3574) |
| 2013-10-22 18:08:22 | Jay Boice | Increase max replay time (it's convenient to store multi-day replays with hours past 24) | [c856609](https://github.com/fivethirtyeight/ap-election-loader/commit/c8566091ee7c1307b5591972a8fb3be63f28b09f) |
| 2013-10-22 17:54:36 | Jay Boice | Add accessors for timekeys (useful in posthooks) | [cb9963f](https://github.com/fivethirtyeight/ap-election-loader/commit/cb9963fb68a1d1d6d98b63b4d0dd7b1698d1243f) |
| 2013-10-22 14:53:32 | Aaron Bycoffe | Add replaytime, replaytimefrom, replaytimeto options | [74d75b2](https://github.com/fivethirtyeight/ap-election-loader/commit/74d75b29cdc9ece1a18fe5262d7f9f14131911b4) |
| 2013-10-11 19:20:02 | Jay Boice | Move ap_race_id to end of table, fix inserts | [e785c16](https://github.com/fivethirtyeight/ap-election-loader/commit/e785c166150923e46ba2bb6bf7efea95f223f59b) |
| 2013-10-11 18:37:35 | Jay Boice | Don't print sql | [c309939](https://github.com/fivethirtyeight/ap-election-loader/commit/c3099391829f1349db7b365d61198bda6bc5defb) |
| 2013-10-11 18:31:47 | Jay Boice | Improve indexing on stage_ap_races | [896f6ae](https://github.com/fivethirtyeight/ap-election-loader/commit/896f6ae62673c05052b044c86898ba47440b55ee) |
| 2013-09-11 08:39:00 | Jay Boice | Add parameter to run posthook once, whether or not results changed | [34dbdeb](https://github.com/fivethirtyeight/ap-election-loader/commit/34dbdebfa5a30d8d6d38d33753eebe59ae2fb6a2) |
| 2013-09-05 09:30:38 | Jay Boice | Move environment test for replays | [edd8566](https://github.com/fivethirtyeight/ap-election-loader/commit/edd85660ea32eb6dc7ca51db8171d004211c8d52) |
| 2013-08-05 15:04:28 | Jay Boice | Remove skipstates parameter | [3673e2a](https://github.com/fivethirtyeight/ap-election-loader/commit/3673e2a942edce301e102e98eda4d2f3894cfb51) |
| 2013-07-03 08:15:26 | Jay Boice | Remove unneeded require | [afec1d0](https://github.com/fivethirtyeight/ap-election-loader/commit/afec1d093f7fcaab819115deee653e89cac84f0d) |
| 2013-07-03 08:14:29 | Jay Boice | Don't also merge state when initializing | [5cd1906](https://github.com/fivethirtyeight/ap-election-loader/commit/5cd19066a506bdc9ef9365b7ac2b3687238d2276) |
| 2013-07-03 08:12:44 | Jay Boice | Make updated_states a hash, not an array | [1eabe9b](https://github.com/fivethirtyeight/ap-election-loader/commit/1eabe9bc84d48733cf7996d5dca2e56047614105) |
| 2013-06-26 10:18:57 | Andrei Scheinkman | Edited intro text | [090c562](https://github.com/fivethirtyeight/ap-election-loader/commit/090c5629af0c6d06246dac8166e2f8a774a97d6d) |
| 2013-06-26 10:15:39 | Jay Boice | Edit intro | [c3fed2a](https://github.com/fivethirtyeight/ap-election-loader/commit/c3fed2a79e267a3854e7175309dd4bfb374d4ea3) |
| 2013-06-26 08:55:53 | Jay Boice | Add note about AP | [4c54124](https://github.com/fivethirtyeight/ap-election-loader/commit/4c541245f97def61aa67ab5540cf5cc75e293bfa) |
| 2013-06-26 08:49:47 | Jay Boice | Rename winner override column | [ff6b582](https://github.com/fivethirtyeight/ap-election-loader/commit/ff6b582d2cb7645029dd50e7c493866ce463d8bf) |
| 2013-06-25 14:55:00 | Jay Boice | Improve Getting Started | [b82f528](https://github.com/fivethirtyeight/ap-election-loader/commit/b82f5286551688ef533ed86776e8e5fe2e87d199) |
| 2013-06-25 14:20:20 | Jay Boice | Improve exception handling in replayer | [b5afec1](https://github.com/fivethirtyeight/ap-election-loader/commit/b5afec15884e53f69674f7c9b172d8fc4fd47681) |
| 2013-06-25 13:28:03 | Jay Boice | Make @timekey_idx increment properly again | [984725e](https://github.com/fivethirtyeight/ap-election-loader/commit/984725e9958bda92d728ed4b50736d4a4f41abce) |
| 2013-06-25 13:20:07 | Jay Boice | Add note about supplying both states and skipstates | [09a727b](https://github.com/fivethirtyeight/ap-election-loader/commit/09a727b95153dfe2556033ad8069870e1ab9abeb) |
| 2013-06-25 13:17:09 | Jay Boice | Host defaults to localhost in table creation if none specified | [d557541](https://github.com/fivethirtyeight/ap-election-loader/commit/d557541fcd177ac3ea64e75b93ba7958a6183762) |
| 2013-06-25 13:05:48 | Jay Boice | Merge branch 'master' of github.com:huffpostdata/ruby-elections | [09ceb98](https://github.com/fivethirtyeight/ap-election-loader/commit/09ceb9814ce0770eebf6acf3acb5637d7dc44883) |
| 2013-06-25 13:05:39 | Jay Boice | Update README to show replays without s3 | [9b02ec0](https://github.com/fivethirtyeight/ap-election-loader/commit/9b02ec0d4581445fe78e1ce5a970a3eaa09001b5) |
| 2013-06-25 12:54:21 | Andrei Scheinkman | Removed empty section | [1651c75](https://github.com/fivethirtyeight/ap-election-loader/commit/1651c753f7841bf547d9cadc74cda30fcfbaa5be) |
| 2013-06-25 12:53:53 | Andrei Scheinkman | Edited intro to readme. | [80e9040](https://github.com/fivethirtyeight/ap-election-loader/commit/80e9040a5a499cee2877d723d274516ec4b61f5a) |
| 2013-06-25 12:44:11 | Jay Boice | Replays can be recorded and run locally without an s3 account | [fd6ebd8](https://github.com/fivethirtyeight/ap-election-loader/commit/fd6ebd8a569ef15cf38c407b1a26e371412f640d) |
| 2013-06-25 12:41:46 | Jay Boice | Add Exceptions that abort crawling | [5c5e8e8](https://github.com/fivethirtyeight/ap-election-loader/commit/5c5e8e89b40adbb7033e55f0d1a5574978d808c6) |
| 2013-06-25 11:45:51 | Aaron Bycoffe | Minor README edits | [6dc8b30](https://github.com/fivethirtyeight/ap-election-loader/commit/6dc8b30e495b56f41f6d3e6b39b207487606e781) |
| 2013-06-24 19:24:57 | Jay Boice | Move create table sql | [3d4692f](https://github.com/fivethirtyeight/ap-election-loader/commit/3d4692f5449a5dd46b9867dd45a07c72ed6489ae) |
| 2013-06-21 10:57:52 | Jay Boice | Tweak options and add to README | [ab443f3](https://github.com/fivethirtyeight/ap-election-loader/commit/ab443f371f2896d6dbcafbf73f0f28c539222f9f) |
| 2013-06-21 10:37:22 | Jay Boice | Try both 'load data' and 'load data local' rather than pick one based on environment | [405d91c](https://github.com/fivethirtyeight/ap-election-loader/commit/405d91c7968316db5383cad988f276c2d6bdba88) |
| 2013-06-21 10:28:07 | Jay Boice | First pass at README | [2f4f545](https://github.com/fivethirtyeight/ap-election-loader/commit/2f4f5454c868afe71b0cf26029b90eba8e8e56b4) |
| 2013-06-21 10:17:26 | Jay Boice | Change directory key in s3.yml | [a57ed76](https://github.com/fivethirtyeight/ap-election-loader/commit/a57ed761d4467155813f24321d8072a4857853bd) |
| 2013-06-21 09:27:33 | Jay Boice | Create tables when initializing | [61f3cfb](https://github.com/fivethirtyeight/ap-election-loader/commit/61f3cfb1d0ed6c91d20b43335c0cb9d4a00d422c) |
| 2013-06-21 08:47:33 | Jay Boice | Get environment from config file rather than RAILS_ENV | [c57b401](https://github.com/fivethirtyeight/ap-election-loader/commit/c57b4018daa54244c79fee86d9153afe2042e9b5) |
| 2013-06-21 08:40:15 | Jay Boice | Remove unused options in database.yml | [59c26c5](https://github.com/fivethirtyeight/ap-election-loader/commit/59c26c5624e6091fb7af60e261594eb5af3e8fa7) |
| 2013-06-21 08:17:29 | Jay Boice | Add option to clean data directory | [da33831](https://github.com/fivethirtyeight/ap-election-loader/commit/da33831ca563f9caa4fc9ff4484f3de425009993) |
| 2013-06-21 08:07:37 | Jay Boice | Make crawling work without an s3.yml | [c9d8363](https://github.com/fivethirtyeight/ap-election-loader/commit/c9d83632bca89127694a3488374f85c1db9140df) |
| 2013-06-19 11:28:31 | Jay Boice | Add create table sql | [bd792b5](https://github.com/fivethirtyeight/ap-election-loader/commit/bd792b5cb48087ed154b17ca579bb5ecbd177b8a) |
| 2013-06-19 11:26:31 | Jay Boice | Wrap updates in transaction | [1397a8e](https://github.com/fivethirtyeight/ap-election-loader/commit/1397a8e410ccc2b98b078ae9902c0bc3164532c1) |
| 2013-06-19 08:51:27 | Jay Boice | Ignore posthook directory | [d904f3e](https://github.com/fivethirtyeight/ap-election-loader/commit/d904f3e680893c9bddeae25156fbcb0bf95cdaaa) |
| 2013-06-18 16:16:44 | Jay Boice | Add sample posthook file and call run method | [951eb97](https://github.com/fivethirtyeight/ap-election-loader/commit/951eb975240f826e978ff47c1ac386c2e76ab979) |
| 2013-06-18 15:41:49 | Jay Boice | Clean up replaying, add script to upload recordings | [0cb5d84](https://github.com/fivethirtyeight/ap-election-loader/commit/0cb5d84c1ad7051cae9a79cef3bfa1847092fe70) |
| 2013-06-18 14:09:55 | Jay Boice | Clean up importer | [f01319c](https://github.com/fivethirtyeight/ap-election-loader/commit/f01319c234c69cda6423b83361a6dfca4c0171e8) |
| 2013-06-18 13:44:51 | Jay Boice | Comment crawler | [2c3330d](https://github.com/fivethirtyeight/ap-election-loader/commit/2c3330d8fb4a3404d7a057f1b07b9185a220fb90) |
| 2013-06-18 13:40:32 | Jay Boice | Comment and clean up downloader | [c28c092](https://github.com/fivethirtyeight/ap-election-loader/commit/c28c092bfe24c2fc4e752264d276b555dcb988fa) |
| 2013-06-18 13:31:20 | Jay Boice | Cleanup sleeping | [5097961](https://github.com/fivethirtyeight/ap-election-loader/commit/50979613e009a352cf8f1f9772518da55f06d214) |
| 2013-06-18 13:30:35 | Jay Boice | Use correct importer object | [be4184d](https://github.com/fivethirtyeight/ap-election-loader/commit/be4184dbbd75437f15cd5cfb7465754b3deebee3) |
| 2013-06-18 13:29:22 | Jay Boice | Never run replays in production | [ebf2c2f](https://github.com/fivethirtyeight/ap-election-loader/commit/ebf2c2f7ba242b8dcad99d72ebaf48fe3e556012) |
| 2013-06-18 13:14:45 | Jay Boice | Clean up class structure, remove global variables | [d710df5](https://github.com/fivethirtyeight/ap-election-loader/commit/d710df5e38dc1d7899b2683ee2e89e96e39e5ed2) |
| 2013-06-07 13:10:40 | Jay Boice | Clean up crawl.rb a bit | [44f5c8d](https://github.com/fivethirtyeight/ap-election-loader/commit/44f5c8daaae4c189acc1786e6e8a2e3ba9fc41ce) |
| 2013-06-07 12:30:48 | Jay Boice | Add states to config file | [4a7a787](https://github.com/fivethirtyeight/ap-election-loader/commit/4a7a7873505f86fef377c55f8959c6c5b64a813c) |
| 2013-06-07 12:30:17 | Jay Boice | Move default states into config file | [c7d8cf7](https://github.com/fivethirtyeight/ap-election-loader/commit/c7d8cf7f8d9131769cd653b98657f670748b0bec) |
| 2013-06-07 12:01:20 | Jay Boice | Initial commit | [fa3de21](https://github.com/fivethirtyeight/ap-election-loader/commit/fa3de21db4306dc2df3914f5ac64451b764020b7) |

