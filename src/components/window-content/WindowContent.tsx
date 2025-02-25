import React, { memo, useEffect, useState } from "react";

import { StylesEnum, Themes } from "@/consts/styles.enum";
import { WindowData } from "@/consts/types";
import { useTheme } from "@/context/theme-context";

interface WindowContentProps {
  data: WindowData;
}

function WindowContent({ data }: WindowContentProps) {
  const { currentTheme } = useTheme();
  const [styles, setStyles] = useState(StylesEnum.default);

  useEffect(() => {
    if (currentTheme === Themes["Blueprint Dark"]) {
      setStyles(StylesEnum.dark);
    } else {
      setStyles(StylesEnum.default);
    }
  }, [currentTheme]);

  return (
    <div className={`p-3 + ${styles}`}>
      <p>
        <span className="font-bold">ticker:</span> {data.ticker}
      </p>
      <p>
        <span className="font-bold">Name:</span> {data.name}
      </p>
      <p>
        <span className="font-bold">Legal name:</span> {data.legal_name}
      </p>
      <p>
        <span className="font-bold">Stock exchange:</span> {data.stock_exchange}
      </p>
      <p>
        <span className="font-bold">Short description:</span>{" "}
        {data.short_description}
      </p>
      <p>
        <span className="font-bold">Long description:</span>{" "}
        {data.long_description}
      </p>
      <p>
        <span className="font-bold">Web:</span> {data.company_url}
      </p>
      <p>
        <span className="font-bold">Business address:</span>{" "}
        {data.business_address}
      </p>
      <p>
        <span className="font-bold">Business phone:</span>{" "}
        {data.business_phone_no}
      </p>
      <p>
        <span className="font-bold">Entity legal form:</span>{" "}
        {data.entity_legal_form}
      </p>
      <p>
        <span className="font-bold">Latest filing date:</span>{" "}
        {data.latest_filing_date}
      </p>
      <p>
        <span className="font-bold">Inc country:</span> {data.inc_country}
      </p>
      <p>
        <span className="font-bold">Employees:</span> {data.employees}
      </p>
      <p>
        <span className="font-bold">Sector:</span> {data.sector}
      </p>
      <p>
        <span className="font-bold">Industry category:</span>{" "}
        {data.industry_category}
      </p>
      <p>
        <span className="font-bold">Industry group:</span> {data.industry_group}
      </p>
      <p>first_stock_price_date {data.first_stock_price_date}</p>
      <p>last_stock_price_date {data.last_stock_price_date}</p>
      <p>
        <span className="font-bold">Thea enabletruelegacy sector:</span>{" "}
        {data.legacy_sector}
      </p>
      <p>
        <span className="font-bold">Legacy industry category:</span>{" "}
        {data.legacy_industry_category}
      </p>
      <p>
        <span className="font-bold">Legacy industry group:</span>{" "}
        {data.legacy_industry_group}
      </p>
    </div>
  );
}

export default memo(WindowContent);
