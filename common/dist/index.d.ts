import { z } from 'zod';
export declare const singupInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    name?: string | undefined;
}, {
    username: string;
    password: string;
    name?: string | undefined;
}>;
export declare const singipInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id?: string | undefined;
}, {
    title: string;
    content: string;
    id?: string | undefined;
}>;
export declare const updateBlog: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id: string;
}, {
    title: string;
    content: string;
    id: string;
}>;
export type SingupInput = z.infer<typeof singupInput>;
export type SinginInput = z.infer<typeof singipInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlog>;
