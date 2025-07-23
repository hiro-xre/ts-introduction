import { Database } from "bun:sqlite";
import { initializeItemTable, createItem } from "./db";

const db = new Database("sqlite.db");

initializeItemTable(db);

if (Bun.argv.length === 4) {
  // コマンドライン引数の最後2つの文字列を取得する
  const content: string = Bun.argv.pop() ?? "";
  const command: string = Bun.argv.pop() ?? "";

  switch (command) {
    case "memo":
      createItem(db, content, "memo");
      break;
    case "todo":
      createItem(db, content, "todo");
      break;
    case "done":
      // TODO: doneの処理
      break;
    default:
      throw new Error("不正なコマンドです");
  }

  // console.log(result);
} else if (Bun.argv.length === 2) {
  // console.log(source);
} else {
  throw new Error("追加のコマンドライン引数の数が多すぎます");
}

db.close();
