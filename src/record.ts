export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Saitama' | 'Kanagawa';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Saitama: { kanji_name: '埼玉', confirmed_cases: 1970 },
  Kanagawa: { kanji_name: '神奈川', confirmed_cases: 1980 },
};
