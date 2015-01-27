import DS from 'ember-data';

var TokenModel = DS.Model.extend({
  content: DS.attr('string')
});

TokenModel.reopen({
  FIXTURES: [
    {
      "id": 1,
      "content": "feof",
      "is_punctuation": false
    },
    {
      "id": 2,
      "content": "til",
      "is_punctuation": false
    },
    {
      "id": 3,
      "content": "environmental",
      "is_punctuation": false
    },
    {
      "id": 4,
      "content": "bathrooms",
      "is_punctuation": false
    },
    {
      "id": 5,
      "content": "makers",
      "is_punctuation": false
    },
    {
      "id": 6,
      "content": "sociology",
      "is_punctuation": false
    },
    {
      "id": 7,
      "content": "atmosphere",
      "is_punctuation": false
    },
    {
      "id": 8,
      "content": "keys",
      "is_punctuation": false
    },
    {
      "id": 9,
      "content": "sewing",
      "is_punctuation": false
    },
    {
      "id": 10,
      "content": "statute",
      "is_punctuation": false
    },
    {
      "id": 11,
      "content": "comparisons",
      "is_punctuation": false
    },
    {
      "id": 12,
      "content": "relying",
      "is_punctuation": false
    },
    {
      "id": 13,
      "content": "difficulties",
      "is_punctuation": false
    },
    {
      "id": 14,
      "content": "trembl",
      "is_punctuation": false
    },
    {
      "id": 15,
      "content": "gs",
      "is_punctuation": false
    },
    {
      "id": 16,
      "content": "choose",
      "is_punctuation": false
    },
    {
      "id": 17,
      "content": "touched",
      "is_punctuation": false
    },
    {
      "id": 18,
      "content": "rip",
      "is_punctuation": false
    },
    {
      "id": 19,
      "content": "baseline",
      "is_punctuation": false
    },
    {
      "id": 20,
      "content": "began",
      "is_punctuation": false
    },
    {
      "id": 21,
      "content": "but",
      "is_punctuation": false
    },
    {
      "id": 22,
      "content": "accompanied",
      "is_punctuation": false
    },
    {
      "id": 23,
      "content": "subjective",
      "is_punctuation": false
    },
    {
      "id": 24,
      "content": "karen",
      "is_punctuation": false
    },
    {
      "id": 25,
      "content": "join",
      "is_punctuation": false
    },
    {
      "id": 26,
      "content": "jungle",
      "is_punctuation": false
    },
    {
      "id": 27,
      "content": "clone",
      "is_punctuation": false
    },
    {
      "id": 28,
      "content": "jvc",
      "is_punctuation": false
    },
    {
      "id": 29,
      "content": "allocation",
      "is_punctuation": false
    },
    {
      "id": 30,
      "content": "console",
      "is_punctuation": false
    },
    {
      "id": 31,
      "content": "rapidly",
      "is_punctuation": false
    },
    {
      "id": 32,
      "content": "airlines",
      "is_punctuation": false
    },
    {
      "id": 33,
      "content": "penny",
      "is_punctuation": false
    },
    {
      "id": 34,
      "content": "dominant",
      "is_punctuation": false
    },
    {
      "id": 35,
      "content": "integer",
      "is_punctuation": false
    },
    {
      "id": 36,
      "content": "writing",
      "is_punctuation": false
    },
    {
      "id": 37,
      "content": "purchasing",
      "is_punctuation": false
    },
    {
      "id": 38,
      "content": "gotten",
      "is_punctuation": false
    },
    {
      "id": 39,
      "content": "gtk",
      "is_punctuation": false
    },
    {
      "id": 40,
      "content": "upc",
      "is_punctuation": false
    },
    {
      "id": 41,
      "content": "eq",
      "is_punctuation": false
    },
    {
      "id": 42,
      "content": "cooking",
      "is_punctuation": false
    },
    {
      "id": 43,
      "content": "tone",
      "is_punctuation": false
    },
    {
      "id": 44,
      "content": "fy",
      "is_punctuation": false
    },
    {
      "id": 45,
      "content": "devon",
      "is_punctuation": false
    },
    {
      "id": 46,
      "content": "phi",
      "is_punctuation": false
    },
    {
      "id": 47,
      "content": "hello",
      "is_punctuation": false
    },
    {
      "id": 48,
      "content": "tight",
      "is_punctuation": false
    },
    {
      "id": 49,
      "content": "stay",
      "is_punctuation": false
    },
    {
      "id": 50,
      "content": "closes",
      "is_punctuation": false
    },
    {
      "id": 51,
      "content": "circus",
      "is_punctuation": false
    },
    {
      "id": 52,
      "content": "priest",
      "is_punctuation": false
    },
    {
      "id": 53,
      "content": "administrative",
      "is_punctuation": false
    },
    {
      "id": 54,
      "content": "debian",
      "is_punctuation": false
    },
    {
      "id": 55,
      "content": "congressional",
      "is_punctuation": false
    },
    {
      "id": 56,
      "content": "cabinet",
      "is_punctuation": false
    },
    {
      "id": 57,
      "content": "friends",
      "is_punctuation": false
    },
    {
      "id": 58,
      "content": "authority",
      "is_punctuation": false
    },
    {
      "id": 59,
      "content": "luxembourg",
      "is_punctuation": false
    },
    {
      "id": 60,
      "content": "modeling",
      "is_punctuation": false
    },
    {
      "id": 61,
      "content": "infants",
      "is_punctuation": false
    },
    {
      "id": 62,
      "content": "royal",
      "is_punctuation": false
    },
    {
      "id": 63,
      "content": "awareness",
      "is_punctuation": false
    },
    {
      "id": 64,
      "content": "store",
      "is_punctuation": false
    },
    {
      "id": 65,
      "content": "broadcasting",
      "is_punctuation": false
    },
    {
      "id": 66,
      "content": "geographical",
      "is_punctuation": false
    },
    {
      "id": 67,
      "content": "application",
      "is_punctuation": false
    },
    {
      "id": 68,
      "content": "transferred",
      "is_punctuation": false
    },
    {
      "id": 69,
      "content": "territory",
      "is_punctuation": false
    },
    {
      "id": 70,
      "content": "touch",
      "is_punctuation": false
    },
    {
      "id": 71,
      "content": "posing",
      "is_punctuation": false
    },
    {
      "id": 72,
      "content": "tomato",
      "is_punctuation": false
    },
    {
      "id": 73,
      "content": "bargains",
      "is_punctuation": false
    },
    {
      "id": 74,
      "content": "commons",
      "is_punctuation": false
    },
    {
      "id": 75,
      "content": "responsibility",
      "is_punctuation": false
    },
    {
      "id": 76,
      "content": "ave",
      "is_punctuation": false
    },
    {
      "id": 77,
      "content": "ali",
      "is_punctuation": false
    },
    {
      "id": 78,
      "content": "crafts",
      "is_punctuation": false
    },
    {
      "id": 79,
      "content": "essential",
      "is_punctuation": false
    },
    {
      "id": 80,
      "content": "rebecca",
      "is_punctuation": false
    },
    {
      "id": 81,
      "content": "attached",
      "is_punctuation": false
    },
    {
      "id": 82,
      "content": "dale",
      "is_punctuation": false
    },
    {
      "id": 83,
      "content": "become",
      "is_punctuation": false
    },
    {
      "id": 84,
      "content": "tribes",
      "is_punctuation": false
    },
    {
      "id": 85,
      "content": "bell",
      "is_punctuation": false
    },
    {
      "id": 86,
      "content": "unified",
      "is_punctuation": false
    },
    {
      "id": 87,
      "content": "shame",
      "is_punctuation": false
    },
    {
      "id": 88,
      "content": "ethnic",
      "is_punctuation": false
    },
    {
      "id": 89,
      "content": "vertical",
      "is_punctuation": false
    },
    {
      "id": 90,
      "content": "ie",
      "is_punctuation": false
    },
    {
      "id": 91,
      "content": "better",
      "is_punctuation": false
    },
    {
      "id": 92,
      "content": "somewhat",
      "is_punctuation": false
    },
    {
      "id": 93,
      "content": "replica",
      "is_punctuation": false
    },
    {
      "id": 94,
      "content": "wings",
      "is_punctuation": false
    },
    {
      "id": 95,
      "content": "plant",
      "is_punctuation": false
    },
    {
      "id": 96,
      "content": "gem",
      "is_punctuation": false
    },
    {
      "id": 97,
      "content": "macromedia",
      "is_punctuation": false
    },
    {
      "id": 98,
      "content": "vacancies",
      "is_punctuation": false
    },
    {
      "id": 99,
      "content": "input",
      "is_punctuation": false
    },
    {
      "id": 100,
      "content": "quiet",
      "is_punctuation": false
    }
  ]
});

export default TokenModel;
