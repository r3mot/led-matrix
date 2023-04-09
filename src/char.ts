export class Char {
  private readonly charWidth = 7;
  private charMap: Map<string, number[]>;
  private chars: { character: string; values: number[] }[];

  constructor() {
    this.charMap = new Map<string, number[]>();
    this.chars = [
      {
        character: "a",
        values: [0x30, 0x78, 0xcc, 0xcc, 0xfc, 0xcc, 0xcc, 0x00],
      }, // a
      {
        character: "b",
        values: [0xfc, 0x66, 0x66, 0x7c, 0x66, 0x66, 0xfc, 0x00],
      }, // b
      {
        character: "c",
        values: [0x3c, 0x66, 0xc0, 0xc0, 0xc0, 0x66, 0x3c, 0x00],
      }, // c
      {
        character: "d",
        values: [0xf8, 0x6c, 0x66, 0x66, 0x66, 0x6c, 0xf8, 0x00],
      }, // d
      {
        character: "e",
        values: [0xfe, 0x62, 0x68, 0x78, 0x68, 0x62, 0xfe, 0x00],
      }, // e
      {
        character: "f",
        values: [0xfe, 0x62, 0x68, 0x78, 0x68, 0x60, 0xf0, 0x00],
      }, // f
      {
        character: "g",
        values: [0x3c, 0x66, 0xc0, 0xc0, 0xce, 0x66, 0x3e, 0x00],
      }, // g
      {
        character: "#",
        values: [0x6c, 0x6c, 0xfe, 0x6c, 0xfe, 0x6c, 0x6c, 0x00],
      }, // #
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
