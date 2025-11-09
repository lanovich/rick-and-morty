import fs from "fs";
import path from "path";

const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Укажи имя компонента!");
  process.exit(1);
}

const basePath = path.resolve("src/shared/ui", componentName);
const componentFile = path.join(basePath, `${componentName}.tsx`);
const styleFile = path.join(basePath, `${componentName}.module.css`);

if (fs.existsSync(basePath)) {
  console.error("❌ Такая папка уже существует!");
  process.exit(1);
}

fs.mkdirSync(basePath);

fs.writeFileSync(
  componentFile,
  `import styles from './${componentName}.module.css';

interface ${componentName}Props {}

export const ${componentName} = ({}: ${componentName}Props) => {
  return <div className={styles.${componentName.toLowerCase()}}>Hello ${componentName}</div>;
};
`
);

fs.writeFileSync(
  styleFile,
  `.${componentName.toLowerCase()} {\n  /* styles */\n}\n`
);

console.log(`✅ Компонент ${componentName} создан по пути: ${basePath}`);
