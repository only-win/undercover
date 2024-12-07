import type { Dispatch, ReactElement, SetStateAction } from "react";

export type Component<Props = unknown> = (props: Props) => ReactElement;
export type AsyncComponent<Props = unknown> = (props: Props) => Promise<ReactElement>;

export type SetState<T> = Dispatch<SetStateAction<T>>;