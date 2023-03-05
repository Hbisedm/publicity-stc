interface IAccordion {
    title: string,
    url: string
}

interface ISubject {
    // 主标题
    label: string,
    // 副标题
    subhead: string,
    // 进入专题
    enterName: string,
    // 小标签
    tag: string[],
    // 手风琴
    accordion: IAccordion[]
}

export type { ISubject, IAccordion }