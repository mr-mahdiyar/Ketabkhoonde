import React from "react";
import { Box, Typography } from "@mui/material";
import ImageSrc from "../assets/BooksImages/4.jpg";
const DiscountedBooks = () => {
  return (
    <>
      <Box
        component="div"
        display={"flex"}
        justifyContent={"space-evenly"}
        marginTop={0.5}
        padding={2}
        bgcolor={"customGray.main"}
        fontFamily={"Ordibehesht"}
        sx={{ wordSpacing: "0.1rem" }}
      >
        <Box component={"div"} className="image-wrapper" maxWidth={"20%"} boxShadow={"5px 5px 20px rgba(0, 0, 0, 1)"}>
          <img src={ImageSrc} alt="" className="w-100" />
        </Box>
        <Box
          component={"div"}
          className="texts-wrapper"
          display={"flex"}
          flexDirection={"column"}
          maxWidth={"60%"}
        >
          <Box component={"div"} className="title-wrapper" fontSize={"32px"}>
            <Box component={"span"}>بیمار خاموش </Box>
            را با
            <Box component={"sapn"} color={"red"}>
              {" "}
              40 درصد تخفیف کتابخونده{" "}
            </Box>
            از انتشارات
            <Box component={"span"}> السانا </Box>
            بخوانید
          </Box>
          <Box
            component={"div"}
            className="details-wrapper"
            marginTop={3}
            textAlign={"start"}
          >
            <Typography fontFamily={"Diplomat"} fontSize={"20px"}>
              نویسنده:
              <Box component={"span"} marginRight={0.5}>
                الکس مایکلیدیس
              </Box>
            </Typography>
            <Typography marginTop={2} fontFamily={"Diplomat"} fontSize={"20px"}>
              مترجم:
              <Box component={"span"} marginRight={0.5}>
                بهناز همتی
              </Box>
            </Typography>
            <Typography marginTop={2} fontFamily={"Diplomat"} fontSize={"20px"}>
              تعداد صفحات:
              <Box component={"span"} marginRight={0.5}>
                320 صفحه
              </Box>
            </Typography>
            <Typography marginTop={2} fontFamily={"Diplomat"} fontSize={"20px"}>
              معرفی مختصر:
              <Box component={"span"} marginRight={0.5}>
                کتاب بیمار خاموش رمان پرفروش نیویورک تایمز در ژانر روانشناختی و
                معمایی اثری از الکس مایکلیدیس است که در سال 2019 برنده جایزه
                گودریدز شد.آلیسیا برنسون زنی زیبا، ثروتمند، نقاشی هنرمند، باهوش
                و با استعداد است و با همسرش، گابریل یک عکاس مشهور صنعت مد، در
                یکی از خانه‌های زیبای لندن زندگی می‌کند. آلیسیا به معنای واقعی
                زن کاملی است و زندگی به ظاهر بی‌عیب و نقصی دارد اما در یکی از
                گرم‌ترین شب‌های تابستان صدای چند گلوله از خانه آن‌ها شنیده
                می‌شود و هنگامی که پلیس به خانه آن‌ها می‌رود، جسد گابریل را در
                حالی که به صندلی بسته شده و چند گلوله به صورتش شکلیک شده
                می‌یابد، در طرف دیگر آلیسیا با لباس سفیدی بر تن و چند شکاف عمیق
                بر مچ دست‌هایش حضور دارد و خون زیادی هم از دست داده است. افسران
                پلیس آلیسیا را به بیمارستان منتقل می‌کنند. آلیسیا بعد از اینکه
                نجات می‌یابد دیگر به حرف نمی‌آید در مورد قتل همسرش و آنچه بین
                آن‌ها گذشته است با کسی سخن نمی‌گوید.
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DiscountedBooks;
