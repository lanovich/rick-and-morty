import fs from "fs";
import path from "path";

const args = process.argv.slice(2);

const componentName = args[0];
const targetFolder = args[1] || "shared/ui";
const isDefaultExport = args.includes("--default");

if (!componentName) {
  console.error("❌ Укажи имя компонента!");
  process.exit(1);
}

const basePath = path.resolve(`src/${targetFolder}`, componentName);
const componentFile = path.join(basePath, `${componentName}.tsx`);
const styleFile = path.join(basePath, `${componentName}.module.css`);

if (fs.existsSync(basePath)) {
  console.error("❌ Такая папка уже существует!");
  process.exit(1);
}

fs.mkdirSync(basePath, { recursive: true });

const componentCode = isDefaultExport
  ? `import styles from './${componentName}.module.css';

interface ${componentName}Props {}

const ${componentName} = ({}: ${componentName}Props) => {
  return (
    <div className={styles.${componentName.toLowerCase()}}>
      ${componentName} component
    </div>
  );
};

export default ${componentName};
`
  : `import styles from './${componentName}.module.css';

interface ${componentName}Props {}

export const ${componentName} = ({}: ${componentName}Props) => {
  return (
    <div className={styles.${componentName.toLowerCase()}}>
      ${componentName} component
    </div>
  );
};
`;

fs.writeFileSync(componentFile, componentCode);

fs.writeFileSync(
  styleFile,
  `.${componentName.toLowerCase()} {\n  /* styles for ${componentName} */\n}\n`
);

console.log(`✅ Компонент ${componentName} создан:
📁 Папка: ${basePath}
📄 Экспорт: ${isDefaultExport ? "default" : "named"}
`);
