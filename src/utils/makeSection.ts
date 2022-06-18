import dayjs from 'dayjs';

// import { IDM, IChat } from '@typings/db';

export default function makeSection(chatList: any) {
  const sections2: any = {};
  //   const sections2: { [key: string]: (IDM | IChat)[] } = {};
  //   console.log(chatList);
  // chatList.forEach(chat => {
  //   console.log(chat);
  //   const monthDate = dayjs(chat.createdAt).format('YYYY-MM-DD');
  //   if (Array.isArray(sections[monthDate])) {
  //     sections[monthDate].push(chat);
  //   } else {
  //     sections[monthDate] = [chat];
  //   }
  // });
  //   console.log(chatList);
  chatList.forEach((chat2: any) => {
    // console.log(chat2);
    [...chat2.logs].map((c: any) => {
      const monthDate2 = dayjs(c.sendTime).format('YYYY-MM-DD');
      //   console.log(monthDate2);
      if (Array.isArray(sections2[monthDate2])) {
        sections2[monthDate2].unshift(c);
      } else {
        sections2[monthDate2] = [c];
      }
    });
  });
  //   console.log(sections2);
  //   //   chatList.map((chat2) => {
  //   //     console.log(chat2);
  //   //     // console.log(chat2);
  //   //     // const monthDate2 = dayjs(chat2.createdAt).format('YYYY-MM-DD');
  //   //     // if (Array.isArray(sections[monthDate2])) {
  //   //     //   sections[monthDate2].push(chat2);
  //   //     // } else {
  //   //     //   sections[monthDate2] = [chat2];
  //   //     // }
  //   //   });
  //   console.log(sections);
  //   console.log(sections2);
  //   console.log(Object.entries(sections));
  return sections2;
}
