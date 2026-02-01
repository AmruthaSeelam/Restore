using System;
using System.Net;
using System.Reflection;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace API.Middleware;

public class ExceptionMiddleware(IHostEnvironment env, ILogger<ExceptionMiddleware> logger) : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            await next(context);
        }
        catch (Exception ex)
        {
            
            await ExceptionHandling(context,ex);
        }
    }

    private async Task ExceptionHandling(HttpContext context, Exception ex)
    {
         logger.LogError(ex, ex.Message);
        context.Response.ContentType="Application/json";
        context.Response.StatusCode=(int)HttpStatusCode.InternalServerError;

        var response=new ProblemDetails
        {
            Status = 500,
            Detail = env.IsDevelopment() 
                ? ex.StackTrace?.ToString()
                : null,
            Title = ex.Message
        };

           var options = new JsonSerializerOptions 
            {PropertyNamingPolicy = JsonNamingPolicy.CamelCase};

        var json = JsonSerializer.Serialize(response, options);

        await context.Response.WriteAsync(json);
    }
}
