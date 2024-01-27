import { parseISO, format } from "date-fns";
import { ja } from "date-fns/locale";

const ConvertDate = ({ dateISO }: { dateISO: string }) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy年MM月dd日", { locale: ja })}
    </time>
  );
};

export default ConvertDate;


const dateJA =
  format(parseISO('2024-01-25T01:00:00.000Z'),  // ISO 8601形式のデータをパース
  "yyyy年MM月dd日", // フォーマット指定
  { locale: ja });