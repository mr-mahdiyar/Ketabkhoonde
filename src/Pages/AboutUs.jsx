import { Box, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Box component={"div"} width={"100"} bgcolor={"customGray.main"} mt={0.5}>
      <title>درباره من و کتابخونده</title>
      <Box component={"div"} maxWidth={"80%"} p={4} mx={"auto"}>
        <Typography variant="p" fontFamily={"Diplomat"} fontSize={"22px"}>
          بسم الله الرحمن الرحیم <br /><br /> ایده کتابخونده با هدف ارتقا فرهنگ کتابخوانی و
          معرفی کتاب های آموزنده در سال 1401شکل گرفت. کتابخونده زمانی متولد شد
          که سرکار دکتر مهدیه قزوینی بعنوان پروژه درس تحلیل و طراحی سیستم ها،
          ایجاد و توسعه یک وبسایت را در دستور کار قرار داد. پس از آن و بدنبال
          مشاهده مشکلاتی در جامعه که ارتباط تنگاتنگی با اجحاف در حق کلمه سواد
          داشتند و دغدغه مندی ای که در این زمینه وجود داشت، ایده این سیستم در
          ذهن ما شکل گرفت. ایده ای که هرچند بسیار ساده بنظر می رسد اما ما
          امیدواریم با همین سادگی بتوانیم گامی در جهت رشد سواد مردم سرزمینمان
          برداشته باشیم. در کتابخونده هدف معرفی کتب بصورت صوتی و انشاالله در
          آینده بصورت تصویری مد نظر است. شما عزیزان و مخاطبان کتابخونده می
          توانید از تجربه دوستانتان استفاده و کتاب های موردعلاقه خودتان را برای
          مطالعه انتخاب کنید. در آخر اگر نظر، انتقاد یا پیشنهادی داشتید می
          توانید از صفحه تماس با ما جهت برقراری ارتباط با ما استفاده کنید.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
