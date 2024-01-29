/// @description Insert description here
// You can write your code in this editor
if((place_meeting(Guy.x,Guy.y+1,Floor)) && (keyboard_check(ord("D"))))
{
	Guy.speed = 3;//sets speed to value of 3, or right
}
if((place_meeting(Guy.x,Guy.y+1,Floor)) && (keyboard_check(ord("A"))))
{
	Guy.speed = -3;//sets speed to value of -3, or left
}

vsp = vsp + grv; //sets vsp, makes gravity cumulative or exponential

if(place_meeting(Guy.x,Guy.y+4,Floor))
{
	while(!place_meeting(Guy.x,Guy.y+1,Floor))
	{
		Guy.y = Guy.y + 1;
	}
	
	vsp = 0;
}



if((place_meeting(Guy.x,Guy.y+1,Floor)) && (keyboard_check_pressed(vk_space)))
{
	vsp = -7;
	
}

y = y + vsp;

if((place_meeting(Guy.x+5,Guy.y,Wall2)) && (keyboard_check_pressed(vk_space)))
{
	Guy.speed = Guy.speed * -1;
	vsp = -7;
}
else if(place_meeting(Guy.x+5,Guy.y,Wall2))
{
	Guy.speed = Guy.speed * -1;
}