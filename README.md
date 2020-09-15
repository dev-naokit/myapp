# mdClip - Fun with code - (個人開発アプリ)

https://www.mdclip.xyz/

## アプリ要件

### アーキテクチャ
![myVPC copy](https://user-images.githubusercontent.com/65161895/93186408-90c2a400-f779-11ea-9b57-07656b469d19.png)

### 機能要件:

リアルタイムプレビューが可能な markdown エディタ / 多言語対応のシンタックスハイライト / ログイン不要で記事の作成が可能 / 生成した記事は固有の URL を割り当て共有可能 / シェアボタンで Twitter に URL を投稿 / URL 削除用の記事固有パスワードを自動生成

### 非機能要件:

SSL 対応 / CI/CD (GitHub > CircleCI > Capistrano > AWS EC2) を導入し、自動テストおよび開発段階からデプロイ環境での動作検証が可能であること

本番環境: AWS [ EC2(Amazon Linux2), RDS(PostgreSQL) ], NGINX

開発環境: Docker, CircleCI, Ruby 2.7.1, Rails 6.0.3, PostgreSQL 11.6

## なぜ作ったか

プログラミング初学者が、Twitter 上でスクリーンショットを使ってコードを共有しているのを見て考案。見る側、見せる側にとって、もっと効果的な方法を検討した結果、共有用 URL を生成可能なオンライン markdown エディタの制作に至りました。
一旦実装したユーザー登録機能を、利用のために必須ではなくすることで、とにかく早く、手軽に使ってもらうことに拘りました。

## 何をしたか

まったく無知な状態でしたが、インフラの構築 (AWS)、CI/CD 環境(CircleCI)の構築から取り組みました。
また開発環境には Docker を取り入れ、より実際の開発現場に近い環境に近づけるよう意識しました。
これらは、アプリ制作にかかった時間と同等か、それ以上に時間を要する作業でしたが、
web 開発の全体像把握に大いに役立ちました。

## 何を得たか

とても、たくさんの人に使ってもらえるような状況ではありませんが
プログラミンを学ぶ仲間に、これで”markdown 表記の練習をする！”と言ってもらえたことがとても嬉しかったです。
また、web アプリの制作を歴て、開発に必要な知識、技術についての視野が広がり
ネットワークの基礎、クラウドベースのインフラについて関心を深めるきっかけになりました。
