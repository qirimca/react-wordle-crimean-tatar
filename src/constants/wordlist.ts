// КРИМСЬКОТАТАРСЬКІ СЛОВА ДЛЯ WORDLE

// Список для загадування (найпоширеніші та найбільш підходящі слова)
export const WORDS = [
  // З частотного списку - найпопулярніші
  'böyle', 'yahşi', 'büyük', 'şimdi', 'soñra', 'biraz', 'bugün', 'belli', 
  'belki', 'güzel', 'yaqın', 'qadın', 'yavaş', 'cevap', 'insan', 'türlü',
  'tanış', 'şöyle', 'beyaz', 'küçük', 'artıq', 'haber', 'dünya', 'aşağı',
  'temiz', 'zaman', 'daima', 'oğlan', 'yarın', 'kelir', 'fikir', 'yeşil',
  'aqşam', 'selâm', 'sıcaq', 'qattı', 'yürek', 'çeşit', 'aydın', 'qısqa',
  'tatlı', 'kitap', 'qarar', 'suvuq', 'küçlü', 'sevgi', 'küneş', 'vatan',
  'yerli', 'tatar', 'talap', 'sadıq', 'çıqar', 'meşur', 'yalan', 'keçir',
  'qıyın', 'hasta', 'nefes', 'köter', 'qolay', 'ketir', 'davet', 'malik',
  'qulaq', 'acele', 'yarıq', 'tesir', 'molla', 'taraf', 'çoban', 'quvet',
  'ürmet', 'seyir', 'asker', 'köküs', 'keder', 'qaviy', 'nazik', 'yaman',
  
  // Додаткові поширені слова з основного списку
  'araba', 'balıq', 'başka', 'canlı', 'devir', 'ediye', 'erkek', 'fayda',
  'hayır', 'ifade', 'kapik', 'lâzim', 'masal', 'misal', 'murat', 'namus',
  'nesil', 'parça', 'qorqu', 'resim', 'sabır', 'serin', 'tarih', 'tavuq',
  'yarat', 'zarar', 'çeçek', 'çağır', 'deñiz', 'duyğu', 'göñül', 'kâğıt',
  'qanun', 'sevda', 'şarap', 'teatr', 'uyğun', 'yiber', 'zayıf', 'zorla',
  
  // Базові слова
  'arası', 'berdi', 'birde', 'bütin', 'dört', 'elli', 'gelen', 'getti',
  'ibler', 'kirdi', 'olsun', 'söyle', 'turma', 'vaqıt', 'yaxşı', 'çalış'
];

// Повний список для валідації здогадок
export const VALID_WORDS = [
  // Всі слова з ANSWER_WORDS плюс додаткові валідні слова
  ...ANSWER_WORDS,
  
  // Додаткові валідні слова з основного списку
  'aalen', 'aarau', 'abbas', 'abdal', 'abdiş', 'abdul', 'abdül', 'abhaz',
  'abibe', 'abide', 'ablay', 'ablây', 'ablâz', 'abram', 'abrar', 'abray',
  'abuca', 'abune', 'acaib', 'acaip', 'acaks', 'acemi', 'acire', 'acıma',
  'adams', 'adayr', 'addaş', 'adhat', 'adile', 'adina', 'adise', 'adlar',
  'adolf', 'adrar', 'adres', 'adsız', 'adına', 'afife', 'afinı', 'afize',
  'afton', 'afyon', 'afğan', 'ageda', 'agent', 'aglay', 'ahdan', 'ahdar',
  'ahern', 'ahlap', 'ahlâq', 'ahmad', 'ahmaq', 'ahmat', 'ahmed', 'ahmet',
  'ahrar', 'ahret', 'ahtem', 'ahzar', 'aizar', 'akbar', 'akime', 'akimi',
  'akkra', 'akmal', 'akron', 'aksiy', 'aktiv', 'akton', 'aktör', 'akula',
  'alaca', 'alamo', 'alayn', 'alaşa', 'albat', 'alber', 'albin', 'albom',
  'albon', 'aldan', 'aldar', 'aldav', 'aldın', 'aleks', 'aleme', 'alide',
  'alige', 'alime', 'aliya', 'aliye', 'aljir', 'alkoa', 'alköy', 'allai',
  'allam', 'allan', 'allar', 'allau', 'allen', 'allin', 'alloa', 'allâq',
  'allıq', 'alman', 'almas', 'almaz', 'almış', 'alpay', 'alsız', 'altay',
  'altea', 'alter', 'altin', 'alton', 'altun', 'altus', 'altın', 'alzip',
  'alâcı', 'alâqa', 'alçaq', 'alçin', 'alöşa', 'alğış', 'alıcı', 'alışa',
  
  // Продовжуємо з відфільтрованими словами довжиною 5 букв
  'ambah', 'ambar', 'amber', 'amboy', 'amdiy', 'ameli', 'ameri', 'amide',
  'amire', 'amlin', 'ammal', 'amman', 'amori', 'amyen', 'anafi', 'anane',
  'anani', 'anapa', 'anası', 'anbar', 'anber', 'anden', 'anebü', 'angol',
  'anhen', 'anife', 'anita', 'anoka', 'ansan', 'anson', 'anter', 'antib',
  'antik', 'anton', 'anvar', 'anzer', 'aosta', 'apeks', 'appaz', 'aprel',
  'apsli', 'aptem', 'apton', 'aptos', 'aqide', 'aqlap', 'aqlav', 'aqran',
  'aqrep', 'aqsaq', 'aqsız', 'aqyar', 'aqçam', 'aqçil', 'aqşam',
  
  // Базові дієслова та прикметники
  'baqır', 'baran', 'başaq', 'başka', 'başta', 'bebek', 'beden', 'bedin',
  'bedir', 'bediy', 'bekâr', 'bekçi', 'belem', 'belen', 'belgi', 'belin',
  'berdi', 'berer', 'beret', 'bergi', 'beril', 'berin', 'berit', 'berke',
  'berki', 'berli', 'berme', 'berne', 'berni', 'berns', 'berri', 'berse',
  'berta', 'berum', 'berüv',
  
  // Назви та географічні терміни
  'canan', 'canay', 'canlı', 'capma', 'caris', 'carlı', 'cartı', 'casmi',
  'casti', 'casus', 'cauda', 'cauza', 'cavid', 'cavun', 'cayav', 'cayıq',
  'cebir', 'ceddo', 'cedid', 'cedit', 'cegen', 'ceket', 'celda', 'celde',
  'celep', 'celke', 'cemal', 'cemma', 'cemmi', 'cenap', 'cendi', 'cenel',
  
  // Інші поширені слова
  'dadli', 'dafer', 'dafni', 'dahau', 'daiba', 'daima', 'daira', 'daire',
  'daiya', 'dakar', 'dakka', 'dakor', 'dalen', 'dalit', 'dalli', 'dalls',
  'dallı', 'dalut', 'daluv', 'dalva', 'dalğa', 'damar', 'damla', 'damlı',
  'damme', 'damon', 'danda', 'dandi', 'danil', 'daniş', 'danko', 'dante',
  
  // Тільки найпоширеніші та найбільш підходящі 5-буквені слова
  'elvan', 'elvin', 'elçin', 'emden', 'emeli', 'emili', 'emine', 'emmen',
  'emori', 'emçek', 'endam', 'endek', 'endrü', 'engel', 'engen', 'enger',
  'fadme', 'fadva', 'fahar', 'fahri', 'fahte', 'faika', 'faila', 'faişe',
  'gajan', 'gacar', 'gadel', 'gadir', 'gaeta', 'gajbi', 'galit', 'galka',
  'haber', 'habeş', 'habib', 'hacar', 'hacib', 'hadia', 'hadil', 'hadim',
  'iblis', 'ibray', 'ibret', 'icran', 'icret', 'icriy', 'idare', 'iddet',
  'jalal', 'jamal', 'janan', 'janar', 'janel', 'janis', 'jansu', 'janıl',
  'kabar', 'kabel', 'kabot', 'kabra', 'kabri', 'kabul', 'kadam', 'kadan',
  'laben', 'lacen', 'ladan', 'ladda', 'lager', 'lagos', 'lahor', 'laiha',
  'mabel', 'maben', 'mabet', 'mabli', 'mabus', 'macar', 'macda', 'macit',
  'naama', 'nabil', 'nabız', 'nacah', 'nacda', 'nacla', 'nacma', 'nadan',
  'obama', 'obana', 'obraz', 'obzor', 'ocono', 'odana', 'odesa', 'oftob',
  'pablo', 'paden', 'padma', 'pafos', 'pahoa', 'pahta', 'pahıl', 'paiya',
  'qadem', 'qader', 'qadim', 'qadir', 'qadın', 'qafes', 'qaide', 'qalav',
  'raafa', 'raahe', 'rabab', 'rabat', 'rabbi', 'rabia', 'raden', 'radio',
  'saada', 'saara', 'saari', 'sabah', 'saban', 'sabaq', 'sabba', 'sabel',
  'taban', 'tabaq', 'tabar', 'tabbi', 'tabel', 'taber', 'tabia', 'tabib',
  'uadad', 'uaras', 'uarda', 'uatli', 'uayli', 'uayta', 'ucsuz', 'ucsız',
  'vaasa', 'vabaş', 'vacib', 'vacip', 'vadia', 'vadim', 'vadiy', 'vadsö',
  'yaban', 'yahta', 'yahut', 'yahya', 'yahşi', 'yakov', 'yakta', 'yakub',
  'zaava', 'zabel', 'zabit', 'zabje', 'zadar', 'zafer', 'zahar', 'zahid',
  'çaban', 'çabaq', 'çabik', 'çadır', 'çakra', 'çalan', 'çalaş', 'çalis',
  'öbeda', 'öbern', 'öbida', 'öbidi', 'ödeda', 'ödela', 'ödila', 'ödina',
  'üdine', 'ülema', 'ülfat', 'ülker', 'ülkün', 'ülmas', 'ülsan', 'ültüa',
  'ğadap', 'ğafil', 'ğalip', 'ğamlı', 'ğarez', 'ğarip', 'ğayıp', 'ğazap',
  'ırqçı', 'ırğaq', 'ırğat', 'ıslaq', 'ıslıq',
  'şaane', 'şaban', 'şabaş', 'şabli', 'şacia', 'şadan', 'şadin', 'şadlı'
];

// Статистика
console.log(`Слова для загадування: ${ANSWER_WORDS.length}`);
console.log(`Всього валідних слів: ${VALID_WORDS.length}`);
