import * as dayjs from "dayjs";
import * as advancedFormat from "dayjs/plugin/advancedFormat";
import * as customParseFormat from "dayjs/plugin/customParseFormat";
import * as isBetween from "dayjs/plugin/isBetween";
import * as isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import * as isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import * as isoWeek from "dayjs/plugin/isoWeek";
import * as minMax from "dayjs/plugin/minMax";
import * as timezone from "dayjs/plugin/timezone";
import * as utc from "dayjs/plugin/utc";

import "dayjs/locale/ja";

dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isoWeek);
dayjs.extend(minMax);
dayjs.extend(timezone);
dayjs.extend(utc);

dayjs.locale("ja");
