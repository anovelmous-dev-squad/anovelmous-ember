import DS from 'ember-data';

var FormatttedNovelTokenModel = DS.Model.extend({
  token: DS.belongsTo('token'),
  ordinal: DS.attr('integer'),
  chapter: DS.belongsTo('chapter')
});

FormatttedNovelTokenModel.reopen({
    FIXTURES: [
        {
            "id": 5018, 
            "content": "feof", 
            "ordinal": 0, 
            "chapter": 5015
        }, 
        {
            "id": 5020, 
            "content": "til", 
            "ordinal": 1, 
            "chapter": 5015
        }, 
        {
            "id": 5022, 
            "content": "environmental", 
            "ordinal": 2, 
            "chapter": 5015
        }, 
        {
            "id": 5024, 
            "content": "bathrooms", 
            "ordinal": 3, 
            "chapter": 5015
        }, 
        {
            "id": 5026, 
            "content": "makers", 
            "ordinal": 4, 
            "chapter": 5015
        }, 
        {
            "id": 5028, 
            "content": "sociology", 
            "ordinal": 5, 
            "chapter": 5015
        }, 
        {
            "id": 5030, 
            "content": "atmosphere", 
            "ordinal": 6, 
            "chapter": 5015
        }, 
        {
            "id": 5032, 
            "content": "keys", 
            "ordinal": 7, 
            "chapter": 5015
        }, 
        {
            "id": 5034, 
            "content": "sewing", 
            "ordinal": 8, 
            "chapter": 5015
        }, 
        {
            "id": 5036, 
            "content": "statute", 
            "ordinal": 9, 
            "chapter": 5015
        }, 
        {
            "id": 5038, 
            "content": "comparisons", 
            "ordinal": 10, 
            "chapter": 5015
        }, 
        {
            "id": 5040, 
            "content": "relying", 
            "ordinal": 11, 
            "chapter": 5015
        }, 
        {
            "id": 5042, 
            "content": "difficulties", 
            "ordinal": 12, 
            "chapter": 5015
        }, 
        {
            "id": 5044, 
            "content": "trembl", 
            "ordinal": 13, 
            "chapter": 5015
        }, 
        {
            "id": 5046, 
            "content": "gs", 
            "ordinal": 14, 
            "chapter": 5015
        }, 
        {
            "id": 5048, 
            "content": "choose", 
            "ordinal": 15, 
            "chapter": 5015
        }, 
        {
            "id": 5050, 
            "content": "touched", 
            "ordinal": 16, 
            "chapter": 5015
        }, 
        {
            "id": 5052, 
            "content": "rip", 
            "ordinal": 17, 
            "chapter": 5015
        }, 
        {
            "id": 5054, 
            "content": "baseline", 
            "ordinal": 18, 
            "chapter": 5015
        }, 
        {
            "id": 5056, 
            "content": "began", 
            "ordinal": 19, 
            "chapter": 5015
        }, 
        {
            "id": 5058, 
            "content": "but", 
            "ordinal": 20, 
            "chapter": 5015
        }, 
        {
            "id": 5060, 
            "content": "accompanied", 
            "ordinal": 21, 
            "chapter": 5015
        }, 
        {
            "id": 5062, 
            "content": "subjective", 
            "ordinal": 22, 
            "chapter": 5015
        }, 
        {
            "id": 5064, 
            "content": "karen", 
            "ordinal": 23, 
            "chapter": 5015
        }, 
        {
            "id": 5066, 
            "content": "join", 
            "ordinal": 24, 
            "chapter": 5015
        }, 
        {
            "id": 5068, 
            "content": "jungle", 
            "ordinal": 25, 
            "chapter": 5015
        }, 
        {
            "id": 5070, 
            "content": "clone", 
            "ordinal": 26, 
            "chapter": 5015
        }, 
        {
            "id": 5072, 
            "content": "jvc", 
            "ordinal": 27, 
            "chapter": 5015
        }, 
        {
            "id": 5074, 
            "content": "allocation", 
            "ordinal": 28, 
            "chapter": 5015
        }, 
        {
            "id": 5076, 
            "content": "console", 
            "ordinal": 29, 
            "chapter": 5015
        }, 
        {
            "id": 5078, 
            "content": "rapidly", 
            "ordinal": 30, 
            "chapter": 5015
        }, 
        {
            "id": 5080, 
            "content": "airlines", 
            "ordinal": 31, 
            "chapter": 5015
        }, 
        {
            "id": 5082, 
            "content": "penny", 
            "ordinal": 32, 
            "chapter": 5015
        }, 
        {
            "id": 5084, 
            "content": "dominant", 
            "ordinal": 33, 
            "chapter": 5015
        }, 
        {
            "id": 5086, 
            "content": "integer", 
            "ordinal": 34, 
            "chapter": 5015
        }, 
        {
            "id": 5088, 
            "content": "writing", 
            "ordinal": 35, 
            "chapter": 5015
        }, 
        {
            "id": 5090, 
            "content": "purchasing", 
            "ordinal": 36, 
            "chapter": 5015
        }, 
        {
            "id": 5092, 
            "content": "gotten", 
            "ordinal": 37, 
            "chapter": 5015
        }, 
        {
            "id": 5094, 
            "content": "gtk", 
            "ordinal": 38, 
            "chapter": 5015
        }, 
        {
            "id": 5096, 
            "content": "upc", 
            "ordinal": 39, 
            "chapter": 5015
        }, 
        {
            "id": 5098, 
            "content": "eq", 
            "ordinal": 40, 
            "chapter": 5015
        }, 
        {
            "id": 5100, 
            "content": "cooking", 
            "ordinal": 41, 
            "chapter": 5015
        }, 
        {
            "id": 5102, 
            "content": "tone", 
            "ordinal": 42, 
            "chapter": 5015
        }, 
        {
            "id": 5104, 
            "content": "fy", 
            "ordinal": 43, 
            "chapter": 5015
        }, 
        {
            "id": 5106, 
            "content": "devon", 
            "ordinal": 44, 
            "chapter": 5015
        }, 
        {
            "id": 5108, 
            "content": "phi", 
            "ordinal": 45, 
            "chapter": 5015
        }, 
        {
            "id": 5110, 
            "content": "hello", 
            "ordinal": 46, 
            "chapter": 5015
        }, 
        {
            "id": 5112, 
            "content": "tight", 
            "ordinal": 47, 
            "chapter": 5015
        }, 
        {
            "id": 5114, 
            "content": "stay", 
            "ordinal": 48, 
            "chapter": 5015
        }, 
        {
            "id": 5116, 
            "content": "closes", 
            "ordinal": 49, 
            "chapter": 5015
        }, 
        {
            "id": 5118, 
            "content": "circus", 
            "ordinal": 50, 
            "chapter": 5015
        }, 
        {
            "id": 5120, 
            "content": "priest", 
            "ordinal": 51, 
            "chapter": 5015
        }, 
        {
            "id": 5122, 
            "content": "administrative", 
            "ordinal": 52, 
            "chapter": 5015
        }, 
        {
            "id": 5124, 
            "content": "debian", 
            "ordinal": 53, 
            "chapter": 5015
        }, 
        {
            "id": 5126, 
            "content": "congressional", 
            "ordinal": 54, 
            "chapter": 5015
        }, 
        {
            "id": 5128, 
            "content": "cabinet", 
            "ordinal": 55, 
            "chapter": 5015
        }, 
        {
            "id": 5130, 
            "content": "friends", 
            "ordinal": 56, 
            "chapter": 5015
        }, 
        {
            "id": 5132, 
            "content": "authority", 
            "ordinal": 57, 
            "chapter": 5015
        }, 
        {
            "id": 5134, 
            "content": "luxembourg", 
            "ordinal": 58, 
            "chapter": 5015
        }, 
        {
            "id": 5136, 
            "content": "modeling", 
            "ordinal": 59, 
            "chapter": 5015
        }, 
        {
            "id": 5138, 
            "content": "infants", 
            "ordinal": 60, 
            "chapter": 5015
        }, 
        {
            "id": 5140, 
            "content": "royal", 
            "ordinal": 61, 
            "chapter": 5015
        }, 
        {
            "id": 5142, 
            "content": "awareness", 
            "ordinal": 62, 
            "chapter": 5015
        }, 
        {
            "id": 5144, 
            "content": "store", 
            "ordinal": 63, 
            "chapter": 5015
        }, 
        {
            "id": 5146, 
            "content": "broadcasting", 
            "ordinal": 64, 
            "chapter": 5015
        }, 
        {
            "id": 5148, 
            "content": "geographical", 
            "ordinal": 65, 
            "chapter": 5015
        }, 
        {
            "id": 5150, 
            "content": "application", 
            "ordinal": 66, 
            "chapter": 5015
        }, 
        {
            "id": 5152, 
            "content": "transferred", 
            "ordinal": 67, 
            "chapter": 5015
        }, 
        {
            "id": 5154, 
            "content": "territory", 
            "ordinal": 68, 
            "chapter": 5015
        }, 
        {
            "id": 5156, 
            "content": "touch", 
            "ordinal": 69, 
            "chapter": 5015
        }, 
        {
            "id": 5158, 
            "content": "posing", 
            "ordinal": 70, 
            "chapter": 5015
        }, 
        {
            "id": 5160, 
            "content": "tomato", 
            "ordinal": 71, 
            "chapter": 5015
        }, 
        {
            "id": 5162, 
            "content": "bargains", 
            "ordinal": 72, 
            "chapter": 5015
        }, 
        {
            "id": 5164, 
            "content": "commons", 
            "ordinal": 73, 
            "chapter": 5015
        }, 
        {
            "id": 5166, 
            "content": "responsibility", 
            "ordinal": 74, 
            "chapter": 5015
        }, 
        {
            "id": 5168, 
            "content": "ave", 
            "ordinal": 75, 
            "chapter": 5015
        }, 
        {
            "id": 5170, 
            "content": "ali", 
            "ordinal": 76, 
            "chapter": 5015
        }, 
        {
            "id": 5172, 
            "content": "crafts", 
            "ordinal": 77, 
            "chapter": 5015
        }, 
        {
            "id": 5174, 
            "content": "essential", 
            "ordinal": 78, 
            "chapter": 5015
        }, 
        {
            "id": 5176, 
            "content": "rebecca", 
            "ordinal": 79, 
            "chapter": 5015
        }, 
        {
            "id": 5178, 
            "content": "attached", 
            "ordinal": 80, 
            "chapter": 5015
        }, 
        {
            "id": 5180, 
            "content": "dale", 
            "ordinal": 81, 
            "chapter": 5015
        }, 
        {
            "id": 5182, 
            "content": "become", 
            "ordinal": 82, 
            "chapter": 5015
        }, 
        {
            "id": 5184, 
            "content": "tribes", 
            "ordinal": 83, 
            "chapter": 5015
        }, 
        {
            "id": 5186, 
            "content": "bell", 
            "ordinal": 84, 
            "chapter": 5015
        }, 
        {
            "id": 5188, 
            "content": "unified", 
            "ordinal": 85, 
            "chapter": 5015
        }, 
        {
            "id": 5190, 
            "content": "shame", 
            "ordinal": 86, 
            "chapter": 5015
        }, 
        {
            "id": 5192, 
            "content": "ethnic", 
            "ordinal": 87, 
            "chapter": 5015
        }, 
        {
            "id": 5194, 
            "content": "vertical", 
            "ordinal": 88, 
            "chapter": 5015
        }, 
        {
            "id": 5196, 
            "content": "ie", 
            "ordinal": 89, 
            "chapter": 5015
        }, 
        {
            "id": 5198, 
            "content": "better", 
            "ordinal": 90, 
            "chapter": 5015
        }, 
        {
            "id": 5200, 
            "content": "somewhat", 
            "ordinal": 91, 
            "chapter": 5015
        }, 
        {
            "id": 5202, 
            "content": "replica", 
            "ordinal": 92, 
            "chapter": 5015
        }, 
        {
            "id": 5204, 
            "content": "wings", 
            "ordinal": 93, 
            "chapter": 5015
        }, 
        {
            "id": 5206, 
            "content": "plant", 
            "ordinal": 94, 
            "chapter": 5015
        }, 
        {
            "id": 5208, 
            "content": "gem", 
            "ordinal": 95, 
            "chapter": 5015
        }, 
        {
            "id": 5210, 
            "content": "macromedia", 
            "ordinal": 96, 
            "chapter": 5015
        }, 
        {
            "id": 5212, 
            "content": "vacancies", 
            "ordinal": 97, 
            "chapter": 5015
        }, 
        {
            "id": 5214, 
            "content": "input", 
            "ordinal": 98, 
            "chapter": 5015
        }, 
        {
            "id": 5216, 
            "content": "quiet", 
            "ordinal": 99, 
            "chapter": 5015
        }
    ]
});
