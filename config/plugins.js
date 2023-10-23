module.exports = ({ env }) => ({
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 20,
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          ACL: env("AWS_ACL", "public-read"),
          signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
          Bucket: env("AWS_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::report.report",
          modelName: "report",
          transliterate: false,
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -1000,
            limit: 15,
            keys: [
              {
                name: "Title",
                weight: 100,
              },
            ],
          },
        },
        {
          uid: "api::event.event",
          modelName: "event",
          transliterate: false,
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -1000,
            limit: 15,
            keys: [
              {
                name: "Title",
                weight: 100,
              },
            ],
          },
        },
        {
          uid: "api::page.page",
          modelName: "page",
          transliterate: false,
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -1000,
            limit: 15,
            keys: [
              {
                name: "Title",
                weight: 100,
              },
            ],
          },
        },
      ],
    },
  },
});
