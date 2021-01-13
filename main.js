
// Adjectives-array
let wordsAdjective = ['aggressive',
'aloof',
'arrogant',
'belligerent',
'big-headed',
'bitchy',
'boastful',
'bone-idle',
'boring',
'bossy',
'callous',
'cantankerous',
'careless',
'changeable',
'clinging',
'compulsive',
'cowardly',
'cruel',
'cunning',
'cynical',
'deceitful',
'detached',
'dishonest',
'dogmatic',
'domineering',
'finicky',
'flirtatious',
'foolish',
'foolhardy',
'fussy',
'greedy',
'grumpy',
'gullible',
'harsh',
'impatient',
'impolite',
'impulsive',
'inconsiderate',
'inconsistent',
'indecisive',
'indiscreet',
'inflexible',
'interfering',
'intolerant',
'irresponsible',
'jealous',
'lazy',
'Machiavellian',
'materialistic',
'mean',
'miserly',
'moody',
'narrow-minded',
'nasty',
'naughty',
'nervous',
'obsessive',
'obstinate',
'overcritical',
'overemotional',
'parsimonious',
'patronizing',
'perverse',
'pessimistic',
'pompous',
'possessive',
'pusillanimous',
'quarrelsome',
'quick-tempered',
'resentful',
'rude',
'ruthless',
'sarcastic',
'secretive',
'selfish',
'self-centred',
'self-indulgent',
'silly',
'sneaky',
'stingy',
'stubborn',
'stupid',
'superficial',
'tactless',
'timid',
'touchy',
'thoughtless',
'truculent',
'unkind',
'unpredictable',
'unreliable',
'untidy',
'untrustworthy',
'vague',
'vain',
'vengeful',
'vulgar',
 'weak-willed'];

 // Nouns-array
let wordsNoun = ['area',
'book',
'business',
'case',
'child',
'company',
'country',
'day',
'eye',
'fact',
'family',
'government',
'group',
'hand',
'home',
'job',
'life',
'lot',
'man',
'money',
'month',
'mother',
'Mr',
'night',
'number',
'part',
'people',
'place',
'point',
'problem',
'program',
'question',
'right',
'room',
'school',
'state',
'story',
'student',
'study',
'system',
'thing',
'time',
'water',
'way',
'week',
'woman',
'word',
'work',
'world',
'year',
];


// Returns a random adjective from the adjective-array
const getRandomAdj = ()=> {

    let n = Math.floor(Math.random() * wordsAdjective.length);
    return wordsAdjective[n];

};

// Returns a random noun from the noun-array
const getRandomNoun = ()=> {

    let n = Math.floor(Math.random() * wordsNoun.length);
    return wordsNoun[n];

};

// Insult-factory - actually creates it all.
function createInsult(adj, noun) {
    return {
        adj,
        noun,
        secondAdj: getRandomAdj(),
        secondNoun: getRandomNoun(),
        getFullInsult() {

            while(this.adj === this.secondAdj) {
                this.secondAdj = getRandomAdj()             
            };

            while(this.noun === this.secondNoun){
                this.secondNoun = getRandomNoun();
            }


            return `You ${adj} ${noun}, you ${this.secondAdj} ${this.secondNoun}!`
        }
    }
}


let ins = createInsult(getRandomAdj(),getRandomNoun())
console.log(ins.getFullInsult())