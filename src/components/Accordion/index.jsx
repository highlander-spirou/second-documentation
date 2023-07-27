import React from "react";
import * as AccordionComponent from "@radix-ui/react-accordion";
import styles from "./Accordion.module.css";

const AccordionComponentItem = ({ id, header, children }) => {
  return (
    <>
      <AccordionComponent.Item value={id} className={styles.accordion__item}>
        <AccordionComponent.AccordionHeader
          className={styles.accordion__header}>
          <AccordionComponent.AccordionTrigger
            className={styles.accordion__trigger}>
            <div className={styles.accordion__header__text}>{header}</div>
            <div className={styles.accordion__icon__expand} aria-hidden>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </AccordionComponent.AccordionTrigger>
        </AccordionComponent.AccordionHeader>
        <AccordionComponent.AccordionContent
          className={styles.accordion__content}>
          <div className={styles.accordion__content__text}>{children}</div>
        </AccordionComponent.AccordionContent>
      </AccordionComponent.Item>
    </>
  );
};

const Accordion = ({ children }) => {
  return (
    <>
      <AccordionComponent.Root
        type="multiple"
        defaultValue={["item-1"]}
        className={styles.accordion__root}>
        {children}
      </AccordionComponent.Root>
    </>
  );
};

export { Accordion, AccordionComponentItem };
