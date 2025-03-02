export function transliterate(text: string): string {
    const map: Record<string, string> = {
      а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh",
      з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o",
      п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "kh", ц: "ts",
      ч: "ch", ш: "sh", щ: "shch", ы: "y", э: "e", ю: "yu", я: "ya",
      ь: "", ъ: ""
    };
  
    return text
      .toLowerCase()
      .split("")
      .map(char => map[char] || char)
      .join("")
      .replace(/\s+/g, ""); // Убираем пробелы
  }