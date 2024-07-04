import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const Accordians = ({ name, message }) => {
    return (
        <Accordion allowZeroExpanded className="md:w-[500px]">
            <AccordionItem>
                <AccordionItemHeading className="string[transition duration-300]">
                    <AccordionItemButton>{name}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>{message}</p>
                </AccordionItemPanel>
            </AccordionItem>
            {/* <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>You&apos;re learning from the best</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
                        duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Our degrees are recognized worldwide.</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
                        duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>We encourage our students to go global.</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
                        duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem> */}
        </Accordion>
    );
};

export default Accordians;
