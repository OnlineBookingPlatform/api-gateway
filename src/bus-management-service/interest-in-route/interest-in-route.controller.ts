import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { InterestInRouteService } from "./interest-in-route.service";

@Controller("v2/interest-in-route")
export class InterestInRouteController {
    constructor(private readonly interestInRouteService: InterestInRouteService) {}

    @Post()
    create(@Body() data: { accountId: string, routeId: number }) {
        return this.interestInRouteService.create(data);
    }

    @Get("account/:id")

    findAllByAccountId(@Param("id") id: string) {
        console.log(id)
        return this.interestInRouteService.findAllByAccountId(id);
    }

    @Delete(":id")
    delete(@Param("id") id: number) {
        return this.interestInRouteService.delete(id);
    }
}