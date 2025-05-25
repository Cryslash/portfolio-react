import type React from 'react';
import styles from './styles.module.css';

type Technology = {
  alt: string;
  title: string;
  src: string;
};

type TechTableProps = {
  data: Technology[][];
};

export const TechTable: React.FC<TechTableProps> = ({ data }) => {
  return (
    <table>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((tech, colIndex) => (
              <td key={colIndex} className={styles.tableline}>
                <img
                  alt={tech.alt}
                  title={tech.title}
                  src={tech.src}
                  className={styles.langLogo}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
