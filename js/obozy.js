var maxHp = 0;
var maxMp = 0;

function obliczanieMaxHp(){
	maxHp = postac[0].hp+5;
}

function obliczanieMaxMp(){
	maxMp = postac[0].mp+5;
}
var obozy=[{
		opis:"  Stary Obóz to duży kamienny zamek otoczony drewnianym obmurowaniem,tzw. zewnętrznym pierścieniem. To miejsce w typowym średniowiecznym klimacie. Dzięki kopalni i handlu rudą mieszkańcy zapewnili sobie dostatnie życie. W chwili inkantacji Bariery nastąpił tu bunt więźniów pod przywództwem Gomeza. Teraz to on o jego ludzie sprawują władzę. Można tu również spotkać Magów Ognia, ostatnich ludzi wiernych królestwu, oraz współtwórców bariery. Stary Obóz prowadzi ciągłą walkę z Nowym, zaś przedstawicieli sekty ma za szaleńców. Mimo to prowadzi z nimi handel jak i ze światem zewnętrznym.",
		cechy:[{
				hp:12,
				mp:8,
				sila:12,
				zrecznosc:8,
				szybkosc:10,
				celnosc:10,
				inteligencja:10,
				zloto:0,
				poziom:0,
				doswiadczenie:333,
				oboz:"Stary Obóz",
				krag: 0,
				oPociski: 0,
				oMagia: 0,
				oBron: 0,
				oOgien: 0,
				uMiecz1: 10,
				uMiecz2: 10,
				uLuk: 10,
				uKusza: 10,
		}]
		
},{
	opis:'  Grupa więźniów, która kompletnie odcięła się od świata zewnętrznego. Nie obchodzi ich król, ani wojna z orkami, chcą po prostu się wydostać z Kolonii. Magowie Wody, będący najwyższą kastą, postanowili wysadzić wielki kopiec rudy, aby zniszczyć barierę. Jednak tak wielka ilość rudy nakłania do licznych kradzieży, stąd pomysł powołania najemników. Ich szefem został Lee, generał armii królewskiej. Tak powstał Nowy Obóz. Nie muszą handlować ze światem zewnętrznym, przez co cała rudą, jaką wydobędą trafia na kopiec. Stawiając wielką tamę na jeziorze, utworzyli pola ryżowe, z których pochodzi żywność i tani alkohol. Nowy Obóz to wielka jaskinia wydrążona wewnątrz niemniejszej góry. Domy wykute w skale zamieszkują szkodnicy, najemnicy oraz magowie wody.',
	cechy:[{
			hp:10,
			mp:10,
			sila:10,
			zrecznosc:12,
			szybkosc:10,
			celnosc:10,
			inteligencja:10,
			zloto:0,
			poziom:0,
			doswiadczenie:333,
			oboz:"Nowy Obóz",
			krag: 0,
			oPociski: 0,
			oMagia: 0,
			oBron: 0,
			oOgien: 0,
			uMiecz1: 10,
			uMiecz2: 10,
			uLuk: 10,
			uKusza: 10,
	}],
},{
	opis:'  Po przybyciu do Koloni część więźniów zaczęła mieć wizje. Ukazała im się boska istota, potężniejsza i bardziej sprawiedliwa od samego Innosa. Był to Śniący, który wskazał im drogę na bagna. Tam znaleźli opuszczone orkowe ruiny, pamiętające jeszcze pierwszą wojnę. Odkryli również sposób na przygotowywanie skrętów z rosnącego tam bagiennego ziela. Brak jakichkolwiek zobowiązań, za wyjątkiem modlitwy, przyciągnął wielu nowych wyznawców i tak powstał trzeci obóz. Jego założyciele objęli stanowisko Guru, pośredników między Śniącym, a ludem. Bractwo prowadzi handel zielem na terenie całej koloni, stara się nawracać kopaczy w Starym Obozie, wreszcie wysyła elitarnych wojowników do Kopalni, aby zbierali wnętrzności pełzaczy, potrzebne do rytuału "Wielkiego Przyzwania".',
	cechy:[{
			hp:8,
			mp:12,
			sila:8,
			zrecznosc:8,
			szybkosc:10,
			celnosc:10,
			inteligencja:10,
			zloto:0,
			poziom:0,
			doswiadczenie:333,
			oboz:"Sekta",
			krag: 0,
			oPociski: 0,
			oMagia: 0,
			oBron: 0,
			oOgien: 0,
			uMiecz1: 10,
			uMiecz2: 10,
			uLuk: 10,
			uKusza: 10,
	}],
	
	
}];


