import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import {Hono} from 'hono'
import { use } from 'hono/jsx';
import { verify } from 'hono/jwt';
import {CreateBlogInput, createBlogInput} from "@100xdevs/medium-common"

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
    Variables:{
        userId:string
    }
}>();

//midleware

blogRouter.use("/*", async (c,next)=>{
    try {
        
        const authHeader = c.req.header("authorization")||"";
        const user = await verify(authHeader,c.env.JWT_SECRET)
        if(user){
            c.set("userId",user.id);
            await next()
            
        }
        else{
            c.status(403);
            return c.json({msg:"you are not logged in"})
        }
        
    } catch (error) {
        c.status(403);
        return c.json({msg:"please login correctly"})
        
    }
})  






blogRouter.post('/crt',async (c)=>{
    const body =await c.req.json();
    const success = createBlogInput.safeParse(body)
    if(!success){
        c.status(403)
        return c.json({msg:'inputs are not valid'})
    }
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const blog = await prisma.post.create({
        data:{
            title:body.title,
            content :body.content,
            authorId:authorId

        }
    })

    return c.json({
        id:blog.id
    })  
  })

  blogRouter.put('/',async (c)=>{
    const body =await c.req.json();
    const userId = c.get("userId")
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const blog = await prisma.post.update({
		where: {
			id: body.id,
			authorId: userId
		},
		data: {
			title: body.title,
			content: body.content
		}
	});

    return c.json({
        id:blog.id
    })  
    
  })
  blogRouter.get('/get/:id',async (c)=>{
    // const body =await c.req.json();
    const id = c.req.param("id")
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    try {
        const blog = await prisma.post.findUnique({
		where: {
			id:id
		},
        select:{
            id:true,
            title:true,
            content:true,
            author:{select:{
                name:true
            }}
        }
	});
    
        return c.json({
            blog
        })
        
    } catch (error) {
        c.status(400)
        return c.json({
            msg:"Error while fetching the blog"
        }) 
    }
     
  })


  blogRouter.get('/bulk',async(c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

    const blogs = await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });
    console.log(blogs,"absakdj");
    
    return c.json({
        blogs

    })
  
  })
 