import { Database } from "bun:sqlite";
import { initializeItemTable } from "./db";

const db = new Database("sqlite.db");

initializeItemTable(db);

if (Bun.argv.length === 4) {
  // コマンドライン引数の最後の文字列を取得する
  const content: string = Bun.argv.pop() ?? "";
  const command: string = Bun.argv.pop() ?? "";

  // console.log(result);
} else if (Bun.argv.length === 2) {
  // console.log(source);
} else {
  throw new Error("追加のコマンドライン引数の数が多すぎます");
}

db.close();
