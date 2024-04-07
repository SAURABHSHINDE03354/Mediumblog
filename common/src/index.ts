import { z} from 'zod'

export const singupInput = z.object({
    username :z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})



export const singipInput = z.object({
    username :z.string().email(),
    password:z.string().min(6),
})


export const createBlogInput = z.object({
    title:z.string(),
    content:z.string(),
    id :z.string().optional()
})


export const updateBlog = z.object({
    title:z.string(),
    content:z.string(),
    id :z.string()
})




export type SingupInput = z.infer<typeof singupInput>
export type SinginInput = z.infer<typeof singipInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlog>
