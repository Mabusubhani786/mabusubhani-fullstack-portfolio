import { experiences } from "@/constants/experiences";

interface YearMonth {
  years: number;
  months: number;
}

const diffInYearMonth = (start: string, end?: string): YearMonth => {
  const startDate = new Date(`${start}-01`);
  const endDate = end ? new Date(`${end}-01`) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth() + 1;

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  return { years, months };
};

const addYearMonth = (a: YearMonth, b: YearMonth): YearMonth => {
  let years = a.years + b.years;
  let months = a.months + b.months;

  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  return { years, months };
};

const toResumeNumber = ({ years, months }: YearMonth): number => {
  return Number(`${years}.${months}`);
};

export const experienceStats = (() => {
  let fullTime: YearMonth = { years: 0, months: 0 };
  let intern: YearMonth = { years: 0, months: 0 };

  experiences.forEach((exp) => {
    const duration = diffInYearMonth(exp.startDate, exp.endDate);

    if (exp.type === "FULL_TIME") {
      fullTime = addYearMonth(fullTime, duration);
    }

    if (exp.type === "INTERN") {
      intern = addYearMonth(intern, duration);
    }
  });

  const total = addYearMonth(fullTime, intern);

  return {
    fullTimeExact: toResumeNumber(fullTime),
    internExact: toResumeNumber(intern),
    totalExact: toResumeNumber(total),

    fullTimeLabel: `${fullTime.years}+`,
    totalLabel: `${total.years}+`,
  };
})();
