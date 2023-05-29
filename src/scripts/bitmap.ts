export class BitMap {
  private readonly charWidth = 7;
  private charMap: Map<string, number[]>;
  private chars: { character: string; values: number[] }[];

  constructor() {
    this.charMap = new Map<string, number[]>();
    this.chars = [
      {
        character: "a",
        values: [0x30, 0x78, 0xcc, 0xcc, 0xfc, 0xcc, 0xcc, 0x00],
      },
      {
        character: "b",
        values: [0xfc, 0x66, 0x66, 0x7c, 0x66, 0x66, 0xfc, 0x00],
      },
      {
        character: "c",
        values: [0x3c, 0x66, 0xc0, 0xc0, 0xc0, 0x66, 0x3c, 0x00],
      },
      {
        character: "d",
        values: [0xf8, 0x6c, 0x66, 0x66, 0x66, 0x6c, 0xf8, 0x00],
      },
      {
        character: "e",
        values: [0xfe, 0x62, 0x68, 0x78, 0x68, 0x62, 0xfe, 0x00],
      },
      {
        character: "f",
        values: [0xfe, 0x62, 0x68, 0x78, 0x68, 0x60, 0xf0, 0x00],
      },
      {
        character: "g",
        values: [0x3c, 0x66, 0xc0, 0xc0, 0xce, 0x66, 0x3e, 0x00],
      },
      {
        character: "h",
        values: [0xcc, 0xcc, 0xcc, 0xfc, 0xcc, 0xcc, 0xcc, 0x00],
      },
      {
        character: "i",
        values: [0x78, 0x30, 0x30, 0x30, 0x30, 0x30, 0x78, 0x00],
      },
      {
        character: "j",
        values: [0x78, 0x30, 0x30, 0x30, 0x30, 0x32, 0x7c, 0x00],
      },
      {
        character: "k",
        values: [0xcc, 0xcc, 0xd8, 0xf0, 0xd8, 0xcc, 0xcc, 0x00],
      },
      {
        character: "l",
        values: [0xf0, 0x60, 0x60, 0x60, 0x60, 0x62, 0xfe, 0x00],
      },
      {
        character: "m",
        values: [0xc6, 0xee, 0xfe, 0xfe, 0xd6, 0xc6, 0xc6, 0x00],
      },
      {
        character: "n",
        values: [0xc6, 0xe6, 0xf6, 0xfe, 0xde, 0xce, 0xc6, 0x00],
      },
      {
        character: "o",
        values: [0x7c, 0xc6, 0xc6, 0xc6, 0xc6, 0xc6, 0x7c, 0x00],
      },

      {
        character: "p",
        values: [0xfc, 0x66, 0x66, 0x7c, 0x60, 0x60, 0xf0, 0x00],
      },
      {
        character: "q",
        values: [0x7c, 0xc6, 0xc6, 0xc6, 0xd6, 0xce, 0x7c, 0x06],
      },
      {
        character: "r",
        values: [0xfc, 0x66, 0x66, 0x7c, 0x6c, 0x66, 0xe6, 0x00],
      },
      {
        character: "s",
        values: [0x7c, 0xc6, 0x60, 0x38, 0x0c, 0xc6, 0x7c, 0x00],
      },
      {
        character: "t",
        values: [0x7e, 0x7e, 0x5a, 0x18, 0x18, 0x18, 0x3c, 0x00],
      },
      {
        character: "u",
        values: [0xc6, 0xc6, 0xc6, 0xc6, 0xc6, 0xc6, 0xfe, 0x00],
      },
      {
        character: "v",
        values: [0xc6, 0xc6, 0xc6, 0xc6, 0xc6, 0x6c, 0x38, 0x00],
      },
      {
        character: "w",
        values: [0xc6, 0xc6, 0xc6, 0xd6, 0xd6, 0xfe, 0x6c, 0x00],
      },
      {
        character: "x",
        values: [0xc6, 0xc6, 0x6c, 0x38, 0x6c, 0xc6, 0xc6, 0x00],
      },
      {
        character: "y",
        values: [0xc6, 0xc6, 0xc6, 0xc6, 0xce, 0x7c, 0x06, 0xfc],
      },
      {
        character: "z",
        values: [0xfe, 0xc6, 0x8c, 0x18, 0x32, 0x66, 0xfe, 0x00],
      },
      {
        character: "#",
        values: [0x6c, 0x6c, 0xfe, 0x6c, 0xfe, 0x6c, 0x6c, 0x00],
      },
      {
        character: "!",
        values: [0x30, 0x30, 0x30, 0x30, 0x30, 0x00, 0x30, 0x00],
      },
      {
        character: "?",
        values: [0x7c, 0xc6, 0x06, 0x0c, 0x18, 0x00, 0x18, 0x00],
      },
      {
        character: ".",
        values: [0x00, 0x00, 0x00, 0x00, 0x00, 0xc0, 0xc0, 0x00],
      },
      {
        character: ",",
        values: [0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x70, 0x60],
      },
    ];

    this.chars.forEach((char) => {
      this.charMap.set(char.character, char.values);
    });
  }

  getMap(): Map<string, number[]> {
    return this.charMap;
  }

  getCharWidth(): number {
    return this.charWidth;
  }
}