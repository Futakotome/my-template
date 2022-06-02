export default function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function random() {
  return Math.ceil(Math.random() * 99999);
}

export function generateTd() {
  const key = `td_${random()}`;
  return {
    type: 'td',
    options: {
      colspan: 1,
      rowspan: 1,
      align: 'left',
      valign: 'middle',
      width: '',
      height: '',
    },
    list: [],
    key,
    model: key,
  };
}
